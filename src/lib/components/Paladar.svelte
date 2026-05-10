<script lang="ts">
  import Button from './Button.svelte';
</script>

<section class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black" id="paladar">
  <div class="grid-12 items-center font-display">
    <div class="col-span-12 md:col-span-6 order-2 md:order-1">
      <h2 class="font-display font-bold text-display text-river-black uppercase leading-none mb-4">PALADAR <br/><span class="text-river-red">RIVERPLATENSE</span></h2>
      <p class="font-display text-subheading text-on-surface mb-6">
        El programa de YouTube donde Spidercarp colabora debatiendo el día a día del Más Grande con un panel de lujo. Análisis, debate y puro sentimiento millonario.
      </p>
      <Button text="Mirar en YouTube" variant="primary" href="https://www.youtube.com/playlist?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS" target="_blank">
        {#snippet icon()}
          <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
        {/snippet}
      </Button>
    </div>
    
    <div class="col-span-12 md:col-span-6 order-1 md:order-2">
      <div class="w-full aspect-video border border-river-black bg-river-black overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS"
          class="w-full h-full border-none"
          allowfullscreen
          title="Paladar Riverplatense YouTube Playlist"
        >
        </iframe>
      </div>
    </div>
  </div>
</section>

<section class="relative px-spacing-24 py-spacing-40 md:py-32 max-w-7xl mx-auto text-center font-display">
  <img 
    src="/P2.png" 
    alt="P2 sticker" 
    class="absolute left-2 md:left-8 -bottom-[20px] z-10 h-[45%] md:h-[75%] w-auto object-contain pointer-events-none drop-shadow-2xl" 
  />
  <h2 class="font-display font-bold text-display text-river-black uppercase leading-none mb-6">UNITE A LA <br/><span class="text-river-red">TELARAÑA MILLONARIA</span></h2>
  <p class="font-display text-subheading text-on-surface max-w-2xl mx-auto mb-8">
    Sumate al Discord, suscribite en Kick y sé parte de la comunidad más gallina de internet. Sorteos, torneos y acceso exclusivo.
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Button text="Suscribirse en Kick" variant="primary" href="https://kick.com/spidercarp23" target="_blank">
      {#snippet icon()}
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
      {/snippet}
    </Button>
    <Button text="Entrar al Discord" variant="ghost">
      {#snippet icon()}
        <span class="material-symbols-outlined">forum</span>
      {/snippet}
    </Button>
  </div>
</section>
