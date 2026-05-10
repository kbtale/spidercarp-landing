<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  const tiktoks = [
    {
      id: "7280990549757218053",
      url: "https://www.tiktok.com/@spidercarp23/video/7280990549757218053",
    },
    {
      id: "7637345327443430673",
      url: "https://www.tiktok.com/@spidercarp23/video/7637345327443430673",
    },
    {
      id: "7634747504772320528",
      url: "https://www.tiktok.com/@spidercarp23/video/7634747504772320528",
    },
  ];

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
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black bg-river-white"
  id="redes"
>
  <!-- TikTok Section -->
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      CONTENIDO EN <span class="text-river-red">TIKTOK</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {#each tiktoks as tiktok, i}
      <div
        class="w-full border-[3px] border-river-black bg-river-white p-4 overflow-hidden flex justify-center min-h-[580px]"
      >
        <blockquote
          class="tiktok-embed"
          cite={tiktok.url}
          data-video-id={tiktok.id}
          style="max-width: 605px; min-width: 325px; margin: 0 auto; width: 100%;"
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

  <div class="flex justify-center mb-24">
    <Button
      text="Ir al Canal de TikTok"
      variant="primary"
      href="https://tiktok.com/@SpiderCarp23"
      target="_blank"
    >
      {#snippet icon()}
        <span class="material-symbols-outlined">arrow_forward</span>
      {/snippet}
    </Button>
  </div>

  <!-- Twitter Section -->
  <div
    class="relative max-w-3xl mx-auto text-center font-display pt-16 border-t border-river-black/10"
  >
    <img
      src="/P8.png"
      alt="P8 sticker"
      class="absolute -right-6 md:-right-16 -bottom-10 z-20 h-[50%] md:h-[75%] w-auto object-contain pointer-events-none drop-shadow-2xl"
    />

    <h2
      class="font-display font-bold text-display text-river-black uppercase leading-none mb-4"
    >
      SEGUIME EN <span class="text-river-red">TWITTER</span>
    </h2>
    <p
      class="font-display text-subheading text-on-surface max-w-xl mx-auto mb-8"
    >
      Opiniones calientes, reacciones al instante y el bardo que no llega al
      stream.
    </p>
    <div class="flex justify-center w-full">
      <Button
        text="Seguir en Twitter"
        variant="primary"
        href="https://x.com/SpiderCarp23"
        target="_blank"
        class="md:mx-auto"
      >
        {#snippet icon()}
          <svg
            viewBox="0 0 512 462.799"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              fill="currentColor"
            />
          </svg>
        {/snippet}
      </Button>
    </div>
  </div>
</section>
