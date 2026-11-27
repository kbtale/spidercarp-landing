<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { EXTERNAL_LINKS, SITE_META, TIKTOK_VIDEOS } from "../data/site";

  let sectionEl: HTMLElement | null = $state(null);
  let embedRequested = $state(false);
  let scriptFailed = $state(false);

  function loadTikTokScript() {
    if (embedRequested) return;
    embedRequested = true;

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.tiktok.com/embed.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onerror = () => {
      scriptFailed = true;
    };
    document.body.appendChild(script);
  }

  onMount(() => {
    if (typeof IntersectionObserver === "undefined") {
      loadTikTokScript();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadTikTokScript();
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );

    if (sectionEl) {
      observer.observe(sectionEl);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<section
  bind:this={sectionEl}
  class="px-4 sm:px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black bg-river-white"
  id="tiktok"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-heading-lg md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      CONTENIDO EN <span class="text-river-red">TIKTOK</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
    {#each TIKTOK_VIDEOS as tiktok, index (tiktok.id)}
      <article
        class="w-full min-w-0 border-[3px] border-river-black bg-river-white shadow-[6px_6px_0_#000] flex flex-col justify-between overflow-hidden"
      >
        <div
          class="bg-river-black text-river-white px-4 py-2.5 flex items-center justify-between gap-2 border-b-[3px] border-river-black"
        >
          <span class="font-display font-bold text-xs uppercase tracking-wider">
            CLIP 0{index + 1} · @{SITE_META.handle}
          </span>
          <span
            class="bg-river-red text-river-white font-display font-bold text-[10px] uppercase tracking-wider px-2 py-0.5"
          >
            TikTok
          </span>
        </div>

        <div
          class="p-3 sm:p-4 flex-1 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] overflow-hidden"
        >
          {#if embedRequested && !scriptFailed}
            <blockquote
              class="tiktok-embed w-full max-w-full min-w-0 m-0"
              cite={tiktok.url}
              data-video-id={tiktok.id}
            >
              <section
                class="flex flex-col items-center justify-center text-center gap-4 p-4 border-[2px] border-dashed border-river-black/30 bg-surface-container-low/40"
              >
                <p
                  class="font-display font-bold text-base uppercase tracking-tight text-river-black"
                >
                  {tiktok.title}
                </p>
                <p class="font-sans text-xs text-on-surface">
                  Cargando vista embebida de TikTok o abrilo directamente en la app.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={tiktok.url}
                  class="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-river-red text-river-white border-[2px] border-river-black font-display font-bold text-xs uppercase tracking-wider hover:bg-river-black transition-colors duration-150"
                >
                  <span>Ver video en TikTok</span>
                  <UiIcon name="launch" class="w-4 h-4" />
                </a>
              </section>
            </blockquote>
          {:else}
            <div
              class="w-full flex flex-col items-center justify-center text-center gap-4 p-6 border-[2px] border-dashed border-river-black/30 bg-surface-container-low/40"
            >
              <p
                class="font-display font-bold text-base uppercase tracking-tight text-river-black"
              >
                {tiktok.title}
              </p>
              <p class="font-sans text-xs text-on-surface">
                {scriptFailed
                  ? "El reproductor de TikTok fue bloqueado por el navegador. Miralo directo en la plataforma."
                  : "El reproductor se carga automáticamente al llegar a esta sección."}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={tiktok.url}
                class="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-river-red text-river-white border-[2px] border-river-black font-display font-bold text-xs uppercase tracking-wider hover:bg-river-black transition-colors duration-150"
              >
                <span>Ver video en TikTok</span>
                <UiIcon name="launch" class="w-4 h-4" />
              </a>
            </div>
          {/if}
        </div>

        <div
          class="border-t-[3px] border-river-black px-4 py-2.5 bg-river-white flex items-center justify-between gap-2"
        >
          <span class="font-sans text-xs font-semibold text-on-surface truncate">
            {tiktok.title}
          </span>
          <a
            href={tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${tiktok.title} en TikTok`}
            class="inline-flex items-center gap-1 font-display font-bold text-xs uppercase tracking-wider text-river-red hover:text-river-black shrink-0 py-1"
          >
            <span>Abrir</span>
            <UiIcon name="launch" class="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    {/each}
  </div>

  <div class="flex justify-center">
    <Button
      text="Ir al Canal de TikTok"
      variant="primary"
      href={EXTERNAL_LINKS.tiktokProfile}
      target="_blank"
      class="max-w-none sm:max-w-[16rem]"
    >
      {#snippet icon()}
        <UiIcon name="arrow-right" class="w-5 h-5" />
      {/snippet}
    </Button>
  </div>
</section>
