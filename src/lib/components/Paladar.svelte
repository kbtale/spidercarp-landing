<script lang="ts">
  import Button from './Button.svelte';
</script>

<section class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black" id="paladar">
  <div class="grid-12 items-center">
    <div class="col-span-12 md:col-span-6 order-2 md:order-1">
      <h2 class="font-display text-display text-river-black uppercase leading-none mb-4">PALADAR <br/><span class="text-river-red">RIVERPLATENSE</span></h2>
      <p class="font-subheading text-subheading text-on-surface mb-6">
        El programa de YouTube donde Spidercarp colabora debatiendo el día a día del Más Grande con un panel de lujo. Análisis, debate y puro sentimiento millonario.
      </p>
      <Button text="Mirar en YouTube" variant="primary">
        {#snippet icon()}
          <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
        {/snippet}
      </Button>
    </div>
    
    <div class="col-span-12 md:col-span-6 order-1 md:order-2">
      <button class="w-full winamp-card p-0 overflow-hidden relative group border-river-red border-2 shadow-xl animate-float-slow hover:shadow-2xl transition-all duration-500 focus:ring-2 focus:ring-offset-4 focus:ring-river-red outline-none" aria-label="Play Paladar Riverplatense on YouTube">
        <img alt="A stylized shot of a studio setup" class="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DqqOsHmW85rVOOSctwVWfGI5k4fO6UZAjtzmalZuFI54nXowSmG9qnFtbL57wyfI4dvmk2FDZsKwEer5TxQXd8Z_hCc_ipXJ_JPm5m5ZFBHMkF6dqaP3Y1Ty5PqTIWyUe2QLGpo4Iu5jSJ6oGR7wpjnx4FAz1wNkF-zajNq-3mBF6eg6nzVxVXfDlrzIcbUZh7eVahpJ-8DQwPWyxpjl3Knn7JDsiZ993CNhu0WZvm0oMX6Q2ofUI7Fb9jXPRIP1WV-NhRNdr49_"/>
        <div class="absolute inset-0 bg-river-black/40 flex items-center justify-center">
          <span class="material-symbols-outlined text-river-red text-7xl md:text-9xl group-hover:scale-110 transition-transform duration-300" style="font-variation-settings: 'FILL' 1;">play_circle</span>
        </div>
      </button>
    </div>
  </div>
</section>

<section class="px-spacing-24 py-spacing-40 md:py-32 max-w-7xl mx-auto text-center">
  <h2 class="font-display text-display text-river-black uppercase leading-none mb-6 animate-float-delayed">UNITE A LA <br/><span class="text-river-red">TELARAÑA MILLONARIA</span></h2>
  <p class="font-subheading text-subheading text-on-surface max-w-2xl mx-auto mb-8">
    Sumate al Discord, suscribite en Kick y sé parte de la comunidad más gallina de internet. Sorteos, torneos y acceso exclusivo.
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <button class="winamp-btn text-xl py-4 px-8 focus:ring-2 focus:ring-offset-2 focus:ring-river-red outline-none">Suscribirse en Kick</button>
    <Button text="Entrar al Discord" variant="ghost">
      {#snippet icon()}
        <span class="material-symbols-outlined">forum</span>
      {/snippet}
    </Button>
  </div>
</section>
