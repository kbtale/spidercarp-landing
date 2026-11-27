<script lang="ts">
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
  } from "@ui-sdk/svelte/dialog";
  import Button from "./Button.svelte";
  import LazyEmbed from "./LazyEmbed.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { COLLABORATIONS, EXTERNAL_LINKS } from "../data/site";

  let isModalOpen = $state(false);
</script>

<section
  class="px-4 sm:px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b-[3px] border-river-black bg-river-white"
  id="colaboraciones"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-display text-river-black uppercase leading-none tracking-tighter"
    >
      COLABORACIONES <span class="text-river-red">Y BARDO</span>
    </h2>
  </div>

  <div class="font-display max-w-6xl mx-auto text-center py-4 sm:py-6 relative">
    <div class="flex flex-col md:flex-row items-stretch mt-2">
      {#each COLLABORATIONS as colab, index (colab.number)}
        <div
          class="flex-1 flex items-start gap-4 text-left py-6 {index === 0
            ? 'md:pr-8 border-b md:border-b-0'
            : index === 1
              ? 'md:px-8 border-b md:border-b-0 md:border-l'
              : 'md:pl-8 md:border-l'} border-river-black/15"
        >
          <span
            class="text-river-red font-display font-bold text-3xl leading-none shrink-0"
            >{colab.number}</span
          >
          <div class="min-w-0">
            <h3
              class="text-heading font-bold text-river-black uppercase tracking-tight"
            >
              {colab.title}
            </h3>
            <p
              class="text-subheading text-on-surface text-sm opacity-85 mt-2 leading-relaxed"
            >
              {colab.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex justify-end mt-4 lg:mt-6 lg:justify-start">
      <button
        type="button"
        onclick={() => (isModalOpen = true)}
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
        class="relative z-20 h-24 sm:h-28 lg:h-32 w-auto transform rotate-[-6deg] hover:rotate-[5deg] hover:scale-105 active:scale-95 transition-transform duration-200 drop-shadow-2xl cursor-pointer bg-transparent border-0 p-1 min-w-[44px] min-h-[44px]"
        aria-label="Abrir modal de disculpa de Micho"
      >
        <img
          src="/Micho.png"
          alt="Sticker interactivo de Micho"
          width="160"
          height="160"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-contain pointer-events-none"
        />
      </button>
    </div>
  </div>

  <div
    class="grid-12 items-center font-display pt-12 sm:pt-16 border-t-[3px] border-river-black/15 mt-8 sm:mt-12"
  >
    <div class="col-span-12 lg:col-span-6 order-2 lg:order-1 min-w-0">
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
        href={EXTERNAL_LINKS.youtubePlaylist}
        target="_blank"
        class="max-w-none sm:max-w-[15rem]"
      >
        {#snippet icon()}
          <UiIcon name="play" class="w-5 h-5" />
        {/snippet}
      </Button>
    </div>

    <div class="col-span-12 lg:col-span-6 order-1 lg:order-2">
      <LazyEmbed
        src={EXTERNAL_LINKS.youtubeEmbed}
        title="Lista de reproducción Paladar Riverplatense en YouTube"
        provider="YouTube"
        fallbackUrl={EXTERNAL_LINKS.youtubePlaylist}
        fallbackCta="Abrir playlist en YouTube"
        fallbackDescription="Mirá todos los programas completos de Paladar Riverplatense directo en YouTube."
      />
    </div>
  </div>
</section>

<Dialog bind:open={isModalOpen}>
  <DialogBackdrop />
  <DialogContent
    class="bg-river-white border-[3px] border-river-black p-6 md:p-8 w-[min(92vw,28rem)] shadow-[8px_8px_0_#000]"
  >
    <DialogClose
      aria-label="Cerrar modal"
      class="absolute top-3 right-3 min-w-[44px] min-h-[44px] text-river-black hover:text-river-red transition-colors duration-150 inline-flex items-center justify-center cursor-pointer"
    >
      <UiIcon name="close" class="w-5 h-5" />
    </DialogClose>

    <div class="text-center pt-10 font-display">
      <DialogTitle
        class="font-display font-black text-2xl md:text-3xl text-river-black uppercase leading-tight tracking-tight mb-2"
      >
        "Pídanle perdón <br />al micho"
      </DialogTitle>
      <DialogDescription
        class="font-heading text-sm md:text-base text-river-red font-bold uppercase tracking-wider mb-8"
      >
        - BocaEnLaCopa
      </DialogDescription>

      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
      >
        <Button
          text="Perdón, Micho"
          variant="primary"
          class="w-full sm:w-auto max-w-none"
          onclick={() => (isModalOpen = false)}
        >
          {#snippet icon()}
            <svg
              viewBox="0 0 24 24"
              class="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              />
            </svg>
          {/snippet}
        </Button>

        <Button
          text="No"
          variant="ghost"
          class="w-full sm:w-auto max-w-none sm:min-w-[8rem]"
          onclick={() => (isModalOpen = false)}
        >
          {#snippet icon()}
            <svg
              viewBox="0 0 24 24"
              class="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          {/snippet}
        </Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
