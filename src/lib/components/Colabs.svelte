<script lang="ts">
  import Button from "./Button.svelte";

  let isModalOpen = $state(false);
</script>

<section
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black bg-river-white"
  id="colaboraciones"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-display text-river-black uppercase leading-none tracking-tighter"
    >
      COLABORACIONES <span class="text-river-red">Y BARDO</span>
    </h2>
  </div>

  <div class="font-display max-w-6xl mx-auto text-center py-6 relative">
    <button
      type="button"
      onclick={() => (isModalOpen = true)}
      class="absolute -left-12 md:-left-28 lg:-left-36 -bottom-12 z-20 h-28 md:h-36 lg:h-44 w-auto transform rotate-[-8deg] hover:rotate-[6deg] hover:scale-115 transition-all duration-300 drop-shadow-2xl cursor-pointer bg-transparent border-0 border-none p-0 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:border-none active:outline-none active:border-none"
      aria-label="Abrir modal de disculpa de Micho"
    >
      <img
        src="/Micho.png"
        alt="Micho sticker"
        class="w-full h-full object-contain pointer-events-none"
      />
    </button>

    <div class="flex flex-col md:flex-row items-stretch mt-4">
      <div
        class="flex-1 flex items-start gap-4 text-left py-6 md:pr-8 border-b md:border-b-0 border-river-black/10"
      >
        <span
          class="text-river-red font-display font-bold text-3xl leading-none"
          >01</span
        >
        <div>
          <h3
            class="text-heading font-bold text-river-black uppercase tracking-tight"
          >
            Discords con BocaEnLaCopa
          </h3>
          <p
            class="text-subheading text-on-surface text-sm opacity-80 mt-2 leading-relaxed"
          >
            El clásico del stream. Debates picantes, chicanas y mucho folklore
            del fútbol argentino.
          </p>
        </div>
      </div>

      <div
        class="flex-1 flex items-start gap-4 text-left py-6 md:px-8 border-b md:border-b-0 md:border-l border-river-black/10"
      >
        <span
          class="text-river-red font-display font-bold text-3xl leading-none"
          >02</span
        >
        <div>
          <h3
            class="text-heading font-bold text-river-black uppercase tracking-tight"
          >
            Invitados Especiales
          </h3>
          <p
            class="text-subheading text-on-surface text-sm opacity-80 mt-2 leading-relaxed"
          >
            Figuras y streamers de la escena se suman a la mesa para hablar del
            Más Grande.
          </p>
        </div>
      </div>

      <div
        class="flex-1 flex items-start gap-4 text-left py-6 md:pl-8 md:border-l border-river-black/10"
      >
        <span
          class="text-river-red font-display font-bold text-3xl leading-none"
          >03</span
        >
        <div>
          <h3
            class="text-heading font-bold text-river-black uppercase tracking-tight"
          >
            Entrevistas y opiniones
          </h3>
          <p
            class="text-subheading text-on-surface text-sm opacity-80 mt-2 leading-relaxed"
          >
            Charlas picantes, análisis tácticos exhaustivos y reflexiones
            honestas sobre el día a día institucional y futbolístico de River.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="grid-12 items-center font-display pt-16 border-t border-river-black/10 mt-12"
  >
    <div class="col-span-12 md:col-span-6 order-2 md:order-1">
      <h3
        class="font-display font-bold text-display text-river-black uppercase leading-none mb-4"
      >
        PALADAR <br /><span class="text-river-red">RIVERPLATENSE</span>
      </h3>
      <p class="font-display text-subheading text-on-surface mb-6">
        El programa de YouTube donde Spidercarp colabora debatiendo el día a día
        del Más Grande con un panel de lujo. Análisis, debate y puro sentimiento
        millonario.
      </p>
      <Button
        text="Mirar en YouTube"
        variant="primary"
        href="https://www.youtube.com/playlist?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS"
        target="_blank"
      >
        {#snippet icon()}
          <span
            class="material-symbols-outlined text-2xl"
            style="font-variation-settings: 'FILL' 1;">play_arrow</span
          >
        {/snippet}
      </Button>
    </div>

    <div class="col-span-12 md:col-span-6 order-1 md:order-2">
      <div
        class="w-full aspect-video border-[3px] border-river-black bg-river-black overflow-hidden shadow-lg"
      >
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

{#if isModalOpen}
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <button
      type="button"
      onclick={() => (isModalOpen = false)}
      class="absolute inset-0 bg-river-black/45 backdrop-blur-md cursor-default border-none outline-none focus:outline-none p-0 m-0 active:border-none focus:border-none"
      aria-label="Cerrar modal"
    ></button>
    <div
      class="bg-river-white border-[3px] border-river-black p-6 md:p-8 w-full max-w-md relative shadow-[8px_8px_0px_rgba(0,0,0,1)] transform scale-100 transition-all duration-300 z-10"
      role="dialog"
      aria-modal="true"
    >
      <button
        class="absolute top-3 right-3 text-river-black hover:text-river-red transition-colors duration-200 outline-none flex items-center justify-center"
        aria-label="Cerrar modal"
        onclick={() => (isModalOpen = false)}
      >
        <span class="material-symbols-outlined font-bold">close</span>
      </button>

      <div class="text-center mt-6 font-display">
        <h3 class="font-display font-black text-2xl md:text-3xl text-river-black uppercase leading-tight tracking-tight mb-2">
          "Pídanle perdón <br />al micho"
        </h3>
        <p class="font-heading text-sm md:text-base text-river-red font-bold uppercase tracking-wider mb-8">
          — BocaEnLaCopa
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Button
            text="Perdón, Micho"
            variant="primary"
            class="w-full sm:w-auto"
            onclick={() => (isModalOpen = false)}
          >
            {#snippet icon()}
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            {/snippet}
          </Button>
          <Button
            text="No"
            variant="ghost"
            class="w-full sm:w-auto"
            onclick={() => (isModalOpen = false)}
          >
            {#snippet icon()}
              <svg
                viewBox="0 0 24 24"
                class="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            {/snippet}
          </Button>
        </div>
      </div>
    </div>
  </div>
{/if}
