<script lang="ts">
  import { onMount } from "svelte";
  import UiIcon from "./UiIcon.svelte";

  interface Props {
    src: string;
    title: string;
    provider: string;
    fallbackUrl: string;
    fallbackCta: string;
    fallbackDescription?: string;
    rootMargin?: string;
    timeoutMs?: number;
    class?: string;
  }

  let {
    src,
    title,
    provider,
    fallbackUrl,
    fallbackCta,
    fallbackDescription = "Si el reproductor externo tarda o está bloqueado por el navegador, abrilo directamente.",
    rootMargin = "250px",
    timeoutMs = 8000,
    class: containerClass = "",
  }: Props = $props();

  let containerEl: HTMLElement | null = $state(null);
  let shouldMount = $state(false);
  let isLoaded = $state(false);
  let hasFailed = $state(false);
  let attemptKey = $state(0);

  onMount(() => {
    if (typeof IntersectionObserver === "undefined") {
      shouldMount = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          shouldMount = true;
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    if (containerEl) {
      observer.observe(containerEl);
    }

    return () => {
      observer.disconnect();
    };
  });

  $effect(() => {
    const activeAttempt = attemptKey;
    if (!shouldMount || isLoaded || hasFailed) return;

    const timer = setTimeout(() => {
      if (activeAttempt === attemptKey && !isLoaded) {
        hasFailed = true;
      }
    }, timeoutMs);

    return () => {
      clearTimeout(timer);
    };
  });

  function retry() {
    hasFailed = false;
    isLoaded = false;
    shouldMount = true;
    attemptKey += 1;
  }
</script>

<div
  bind:this={containerEl}
  class="w-full border-[3px] border-river-black bg-river-black shadow-[6px_6px_0_#000] overflow-hidden {containerClass}"
>
  <div class="relative w-full aspect-video bg-river-black">
    {#if shouldMount && !hasFailed}
      {#key attemptKey}
        <iframe
          {src}
          {title}
          loading="lazy"
          allowfullscreen
          class="w-full h-full border-none relative z-10 {isLoaded
            ? 'opacity-100'
            : 'opacity-0'} transition-opacity duration-200"
          onload={() => {
            isLoaded = true;
            hasFailed = false;
          }}
          onerror={() => {
            hasFailed = true;
          }}
        ></iframe>
      {/key}
    {/if}

    {#if !shouldMount || (!isLoaded && !hasFailed)}
      <div
        class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 p-6 text-center bg-river-black text-river-white"
      >
        <div
          class="w-12 h-12 border-[3px] border-river-red bg-river-red/15 flex items-center justify-center"
        >
          <UiIcon name="play" class="w-6 h-6 text-river-red" />
        </div>
        <div class="space-y-1 max-w-md">
          <p
            class="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-river-white"
          >
            Cargando reproductor de {provider}…
          </p>
          <p class="font-sans text-xs sm:text-sm text-river-white/75">
            {fallbackDescription}
          </p>
        </div>
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-river-red text-river-white border-[2px] border-river-white font-display font-bold text-xs uppercase tracking-wider hover:bg-river-white hover:text-river-black transition-colors duration-150"
        >
          <span>{fallbackCta}</span>
          <UiIcon name="launch" class="w-4 h-4" />
        </a>
      </div>
    {/if}

    {#if hasFailed}
      <div
        class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 p-6 text-center bg-river-white text-river-black"
        role="status"
      >
        <span
          class="inline-block bg-river-red text-river-white font-display font-bold text-xs uppercase tracking-wider px-3 py-1 border-[2px] border-river-black"
        >
          {provider}
        </span>
        <div class="space-y-1 max-w-md">
          <p
            class="font-display font-bold text-base sm:text-lg uppercase tracking-tight text-river-black"
          >
            No se pudo cargar el reproductor embebido
          </p>
          <p class="font-sans text-xs sm:text-sm text-on-surface">
            {fallbackDescription}
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-river-red text-river-white border-[2px] border-river-black font-display font-bold text-xs uppercase tracking-wider hover:bg-river-black transition-colors duration-150"
          >
            <span>{fallbackCta}</span>
            <UiIcon name="launch" class="w-4 h-4" />
          </a>
          <button
            type="button"
            onclick={retry}
            class="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-river-white text-river-black border-[2px] border-river-black font-display font-bold text-xs uppercase tracking-wider hover:bg-river-black hover:text-river-white transition-colors duration-150 cursor-pointer"
          >
            Reintentar
          </button>
        </div>
      </div>
    {/if}
  </div>

  <div
    class="bg-river-white border-t-[3px] border-river-black px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs"
  >
    <span class="font-display font-bold uppercase tracking-wider text-river-black">
      {provider}
    </span>
    <a
      href={fallbackUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-river-red hover:text-river-black underline underline-offset-4 decoration-2 py-1"
    >
      <span>{fallbackCta}</span>
      <UiIcon name="launch" class="w-3.5 h-3.5" />
    </a>
  </div>
</div>
