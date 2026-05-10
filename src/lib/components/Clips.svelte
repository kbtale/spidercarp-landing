<script lang="ts">
  import Button from "./Button.svelte";
  import juanferClip from "../../assets/JuanferClip.mp4";
</script>

<section
  class="relative px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black"
  id="streams"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      TRANSMISIÓN EN <span class="text-river-red">VIVO</span>
    </h2>
  </div>

  <div class="relative w-full max-w-4xl mx-auto mb-16">
    <img
      src="/P6.png"
      alt="P6 sticker"
      class="absolute -left-6 md:-left-16 bottom-0 z-20 h-[60%] md:h-[95%] w-auto object-contain pointer-events-none drop-shadow-2xl"
    />

    <div
      class="w-full aspect-video border-[3px] border-river-black bg-river-black relative z-10"
    >
      <iframe
        src="https://player.kick.com/spidercarp23?autoplay=false&muted=true"
        class="w-full h-full border-none"
        allowfullscreen
        title="Spidercarp Kick Live Stream"
      >
      </iframe>
    </div>
  </div>

  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      CLIPS <span class="text-river-red">DE KICK</span>
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div
      class="col-span-12 md:col-span-7 border-[3px] border-river-black bg-river-black aspect-video overflow-hidden"
    >
      <video
        src={juanferClip}
        class="w-full h-full object-cover"
        controls
        autoplay
        muted
        playsinline
        loop
        preload="metadata"
      >
        <track kind="captions" />
      </video>
    </div>

    <div
      class="col-span-12 md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4"
    >
      <img
        src="/P4.png"
        alt="P4 sticker"
        class="w-24 md:w-32 h-auto object-contain mx-auto md:mx-0 mb-2 md:-mt-16 drop-shadow-xl relative z-20"
      />
      <h3
        class="font-display font-bold text-3xl md:text-4xl text-river-black uppercase leading-none tracking-tighter"
      >
        MIRÁ TODOS LOS CLIPS
      </h3>
      <p class="font-sans text-on-surface text-base max-w-md">
        Disfrutá de las mejores reacciones, debates calientes y momentos
        históricos directamente desde el canal oficial de Spidercarp en Kick.
      </p>
      <div class="pt-2 flex justify-center md:justify-start w-full">
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
</section>
