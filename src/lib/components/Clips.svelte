<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import juanferClip from "../../assets/JuanferClip.mp4";

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
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black"
  id="clips"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      TRANSMISIÓN EN <span class="text-river-red">VIVO</span>
    </h2>
  </div>

  <div
    class="w-full max-w-4xl mx-auto aspect-video mb-16 border border-river-black bg-river-black"
  >
    <iframe
      src="https://player.kick.com/spidercarp23?autoplay=false&muted=true"
      class="w-full h-full border-none"
      allowfullscreen
      title="Spidercarp Kick Live Stream"
    >
    </iframe>
  </div>

  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      CLIPS <span class="text-river-red">DE KICK</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
    <div
      class="col-span-12 md:col-span-7 border border-river-black bg-river-black aspect-video overflow-hidden"
    >
      <video
        src={juanferClip}
        class="w-full h-full object-cover"
        controls
        preload="metadata"
      >
        <track kind="captions" />
      </video>
    </div>

    <div
      class="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-left space-y-4"
    >
      <h3
        class="font-display font-bold text-3xl md:text-4xl text-river-black uppercase leading-none tracking-tighter"
      >
        MIRÁ TODOS LOS CLIPS
      </h3>
      <p class="font-sans text-on-surface text-base max-w-md">
        Disfrutá de las mejores reacciones, debates calientes y momentos
        históricos directamente desde el canal oficial de Spidercarp en Kick.
      </p>
      <div class="pt-2 flex justify-center md:justify-start">
        <Button
          text="Ver en Kick.com"
          variant="ghost"
          href="https://kick.com/spidercarp23/clips"
          target="_blank"
        >
          {#snippet icon()}
            <span class="material-symbols-outlined">launch</span>
          {/snippet}
        </Button>
      </div>
    </div>
  </div>

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
        class="w-full border border-river-black bg-river-white p-4 overflow-hidden flex justify-center min-h-[580px]"
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

  <div class="flex justify-center mt-12">
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
</section>
