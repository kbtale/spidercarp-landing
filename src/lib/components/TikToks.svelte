<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { EXTERNAL_LINKS, TIKTOK_VIDEOS } from "../data/site";

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  });
</script>

<section
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
    {#each TIKTOK_VIDEOS as tiktok (tiktok.id)}
      <div
        class="w-full min-w-0 border-[3px] border-river-black bg-river-white p-2 sm:p-4 overflow-hidden flex justify-center min-h-[520px] sm:min-h-[580px] shadow-[6px_6px_0_#000]"
      >
        <blockquote
          class="tiktok-embed w-full max-w-full min-w-0 m-0"
          cite={tiktok.url}
          data-video-id={tiktok.id}
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="@spidercarp23"
              href="https://www.tiktok.com/@spidercarp23?refer=embed"
              >@spidercarp23</a
            >
          </section>
        </blockquote>
      </div>
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
