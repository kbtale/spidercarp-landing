<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import LazyEmbed from "./LazyEmbed.svelte";
  import LiveStatusBadge from "./LiveStatusBadge.svelte";
  import UiIcon from "./UiIcon.svelte";
  import juanferClip from "../../assets/JuanferClip.mp4";
  import { EXTERNAL_LINKS } from "../data/site";

  let clipContainerEl: HTMLElement | null = $state(null);
  let videoEl: HTMLVideoElement | null = $state(null);
  let isClipActivated = $state(false);

  onMount(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && !entry.isIntersecting && videoEl && !videoEl.paused) {
          videoEl.pause();
        }
      },
      { threshold: 0.1 },
    );

    if (clipContainerEl) {
      observer.observe(clipContainerEl);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<section
  class="relative px-4 sm:px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black"
  id="streams"
>
  <div
    class="mb-10 lg:mb-spacing-32 flex flex-wrap items-end justify-between gap-4 text-left"
  >
    <div class="space-y-3">
      <h2
        class="font-display font-bold text-heading-lg md:text-5xl text-river-black uppercase leading-none tracking-tighter"
      >
        TRANSMISIÓN EN <span class="text-river-red">VIVO</span>
      </h2>
      <LiveStatusBadge />
    </div>

    <img
      src="/P6.png"
      alt=""
      aria-hidden="true"
      width="84"
      height="84"
      loading="lazy"
      decoding="async"
      class="lg:hidden h-14 sm:h-16 w-auto object-contain shrink-0 pointer-events-none drop-shadow-xl"
    />
  </div>

  <div class="relative w-full max-w-5xl mx-auto mb-16 lg:pl-44">
    <img
      src="/P6.png"
      alt=""
      aria-hidden="true"
      width="220"
      height="320"
      loading="lazy"
      decoding="async"
      class="hidden lg:block absolute left-0 bottom-0 z-20 h-[78%] w-auto object-contain pointer-events-none drop-shadow-2xl"
    />

    <div class="relative z-10">
      <LazyEmbed
        src={EXTERNAL_LINKS.kickPlayer}
        title="Transmisión en vivo de Spidercarp en Kick"
        provider="Kick"
        fallbackUrl={EXTERNAL_LINKS.kickChannel}
        fallbackCta="Abrir transmisión en Kick"
        fallbackDescription="Podés ver el stream directo en el canal oficial de Spidercarp en Kick."
      />
    </div>
  </div>

  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-heading-lg md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      CLIPS <span class="text-river-red">DE KICK</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div
      bind:this={clipContainerEl}
      class="col-span-12 md:col-span-7 border-[3px] border-river-black bg-river-black aspect-video overflow-hidden shadow-[6px_6px_0_#000] relative"
    >
      {#if isClipActivated}
        <video
          bind:this={videoEl}
          src={juanferClip}
          class="w-full h-full object-cover"
          controls
          autoplay
          playsinline
          loop
          preload="auto"
        >
          <track
            kind="captions"
            srclang="es"
            label="Español"
            src="/clips-juanfer.vtt"
          />
        </video>
      {:else}
        <div class="relative w-full h-full">
          <img
            src="/juanfer.jpg"
            alt="Vista previa del clip destacado de Juanfer"
            width="800"
            height="450"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-top filter brightness-75"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-river-black/85 via-river-black/35 to-transparent flex flex-col items-center justify-center p-4 text-center gap-3"
          >
            <button
              type="button"
              onclick={() => (isClipActivated = true)}
              aria-label="Reproducir clip destacado de Juanfer"
              class="inline-flex items-center gap-2.5 min-h-[48px] px-5 py-3 bg-river-red text-river-white border-[3px] border-river-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0_#000] hover:bg-river-black active:scale-[0.97] transition-[transform,background-color] duration-150 cursor-pointer"
            >
              <UiIcon name="play" class="w-5 h-5" />
              <span>Reproducir Clip</span>
            </button>
            <span
              class="font-sans text-[11px] uppercase tracking-wider text-river-white/90 bg-river-black/75 px-2.5 py-1 border border-river-white/30"
            >
              Carga bajo demanda · 31 s
            </span>
          </div>
        </div>
      {/if}
    </div>

    <div
      class="col-span-12 md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4"
    >
      <img
        src="/P4.png"
        alt=""
        aria-hidden="true"
        width="128"
        height="128"
        loading="lazy"
        decoding="async"
        class="w-20 sm:w-24 md:w-32 h-auto object-contain mx-auto md:mx-0 mb-1 md:-mt-12 drop-shadow-xl relative z-20 pointer-events-none"
      />
      <h3
        class="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-river-black uppercase leading-none tracking-tighter"
      >
        MIRÁ TODOS LOS CLIPS
      </h3>
      <p class="font-sans text-on-surface text-base max-w-md leading-relaxed">
        Disfrutá de las mejores reacciones, debates calientes y momentos
        históricos directamente desde el canal oficial de Spidercarp en Kick.
      </p>
      <div class="pt-2 flex justify-center md:justify-start w-full">
        <Button
          text="Ver en Kick.com"
          variant="ghost"
          href={EXTERNAL_LINKS.kickClips}
          target="_blank"
          class="max-w-none sm:max-w-[15rem]"
        >
          {#snippet icon()}
            <UiIcon name="launch" class="w-4 h-4" />
          {/snippet}
        </Button>
      </div>
    </div>
  </div>
</section>
