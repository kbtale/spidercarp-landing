<script lang="ts">
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
  } from "@ui-sdk/svelte/dialog";
  import { STREAM_SCHEDULE } from "../data/site";
  import UiIcon from "./UiIcon.svelte";

  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();
</script>

<Dialog bind:open>
  <DialogBackdrop />
  <DialogContent
    class="w-[min(92vw,36rem)] bg-river-white border-[3px] border-river-black shadow-[8px_8px_0_#000] p-0 flex flex-col overflow-hidden"
  >
    <div
      class="bg-river-red text-river-white border-b-[3px] border-river-black px-5 py-4 flex items-center justify-between gap-4"
    >
      <div>
        <DialogTitle
          class="font-display font-bold text-xl sm:text-2xl uppercase leading-none tracking-tight text-river-white"
        >
          Cronograma de Streams
        </DialogTitle>
        <DialogDescription
          class="font-sans text-xs sm:text-sm text-river-white/90 mt-1"
        >
          Horarios habituales (ARG) y dónde activar las alertas en vivo.
        </DialogDescription>
      </div>
      <DialogClose
        aria-label="Cerrar cronograma"
        class="min-w-[44px] min-h-[44px] shrink-0 inline-flex items-center justify-center bg-river-white text-river-black border-[2px] border-river-black hover:bg-river-black hover:text-river-white transition-colors duration-150 cursor-pointer"
      >
        <UiIcon name="close" class="w-5 h-5" />
      </DialogClose>
    </div>

    <div
      class="p-5 sm:p-6 space-y-4 overflow-y-auto overscroll-contain max-h-[65dvh]"
    >
      {#each STREAM_SCHEDULE as slot (slot.id)}
        <div
          class="border-[3px] border-river-black bg-river-white p-4 flex flex-col gap-2"
        >
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span
              class="inline-block bg-river-black text-river-white font-display font-bold text-[11px] uppercase tracking-wider px-2.5 py-1"
            >
              {slot.platform}
            </span>
            <span
              class="font-sans text-xs font-semibold uppercase tracking-wide text-river-red"
            >
              {slot.cadence}
            </span>
          </div>

          <h3
            class="font-display font-bold text-lg text-river-black uppercase tracking-tight"
          >
            {slot.title}
          </h3>
          <p class="font-sans text-sm text-on-surface leading-relaxed">
            {slot.description}
          </p>

          <div class="pt-1">
            <a
              href={slot.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-river-black hover:text-river-red underline underline-offset-4 decoration-2 min-h-[44px]"
            >
              <span>{slot.ctaLabel}</span>
              <UiIcon name="arrow-right" class="w-4 h-4" />
            </a>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="border-t-[3px] border-river-black bg-river-white px-5 py-3 flex justify-end"
    >
      <DialogClose
        class="min-h-[44px] px-5 bg-river-black text-river-white font-display font-bold text-xs uppercase tracking-wider border-[2px] border-river-black hover:bg-river-red hover:border-river-red transition-colors duration-150 cursor-pointer"
      >
        Entendido
      </DialogClose>
    </div>
  </DialogContent>
</Dialog>
