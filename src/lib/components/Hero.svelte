<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import ScheduleDialog from "./ScheduleDialog.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { EXTERNAL_LINKS, HERO_WORDS } from "../data/site";
  import { subscribeMediaQuery } from "../utils/viewport";

  let currentIndex = $state(0);
  let reducedMotion = $state(false);
  let isScheduleOpen = $state(false);

  let prevIndex = $derived(
    currentIndex === 0 ? HERO_WORDS.length - 1 : currentIndex - 1,
  );

  onMount(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const startRotation = () => {
      if (interval) clearInterval(interval);
      if (reducedMotion) return;
      interval = setInterval(() => {
        if (!document.hidden) {
          currentIndex = (currentIndex + 1) % HERO_WORDS.length;
        }
      }, 3000);
    };

    const stopMotion = subscribeMediaQuery(
      "(prefers-reduced-motion: reduce)",
      (matches) => {
        reducedMotion = matches;
        if (matches && interval) {
          clearInterval(interval);
          interval = null;
        } else if (!matches) {
          startRotation();
        }
      },
    );

    return () => {
      stopMotion();
      if (interval) clearInterval(interval);
    };
  });
</script>

<section
  id="inicio"
  class="relative px-4 sm:px-spacing-24 pt-10 pb-0 lg:py-28 border-b-[3px] border-river-black overflow-hidden lg:min-h-[72svh] flex items-center"
>
  <div
    class="absolute inset-0 parallax-bg opacity-20 filter grayscale"
    aria-hidden="true"
  ></div>
  <div
    class="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-river-white via-river-white/90 to-river-white/40 lg:to-transparent"
    aria-hidden="true"
  ></div>

  <div class="max-w-6xl mx-auto grid-12 relative z-10 w-full items-center">
    <div class="col-span-12 lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
      <h1
        class="font-display text-display text-river-black uppercase leading-[1.02] tracking-tighter"
      >
        <span class="layered-black">VIVÍ LA</span> <br />
        <span class="layered-black">LOCURA</span> <br />
        <span
          class="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.16em] max-w-full relative align-bottom pe-2"
        >
          {#if reducedMotion}
            <span
              class="col-start-1 row-start-1 text-river-red inline-block layered-red whitespace-nowrap"
            >
              {HERO_WORDS[currentIndex]}
            </span>
          {:else}
            {#key currentIndex}
              <span
                class="col-start-1 row-start-1 text-river-red inline-block layered-red whitespace-nowrap animate-slide-out"
                aria-hidden="true"
              >
                {HERO_WORDS[prevIndex]}
              </span>
              <span
                class="col-start-1 row-start-1 text-river-red inline-block layered-red whitespace-nowrap animate-slide-in"
              >
                {HERO_WORDS[currentIndex]}
              </span>
            {/key}
          {/if}
        </span>
      </h1>

      <p
        class="font-subheading text-subheading text-on-surface max-w-xl bg-river-white/90 p-4 winamp-border shadow-[6px_6px_0_#000]"
      >
        El destino digital para los hinchas de River Plate. Reacciones en vivo,
        análisis de los partidos, una que otra termeada y la mejor comunidad de
        la red.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
        <Button
          text="Ver en Vivo (Kick)"
          variant="primary"
          href={EXTERNAL_LINKS.kickChannel}
          target="_blank"
          class="max-w-none sm:max-w-[15.5rem]"
        >
          {#snippet icon()}
            <UiIcon name="play" class="w-5 h-5" />
          {/snippet}
        </Button>

        <Button
          text="Cronograma"
          variant="ghost"
          ariaHaspopup="dialog"
          ariaExpanded={isScheduleOpen}
          class="max-w-none sm:max-w-[13.5rem]"
          onclick={() => (isScheduleOpen = true)}
        >
          {#snippet icon()}
            <UiIcon name="calendar" class="w-4 h-4" />
          {/snippet}
        </Button>
      </div>
    </div>

    <div
      class="col-span-12 lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center items-end lg:items-center h-[310px] sm:h-[400px] lg:h-[520px]"
    >
      <div
        class="flex gap-2.5 sm:gap-4 transform -skew-x-6 sm:-skew-x-12 -translate-y-4 lg:-translate-y-12 lg:-translate-x-6"
      >
        <div
          class="relative w-[82px] sm:w-28 lg:w-32 h-52 sm:h-72 lg:h-96 transform -translate-y-4 lg:-translate-y-6 z-10 group/strip"
        >
          <div
            class="absolute inset-0 border-[3px] border-river-red translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
            aria-hidden="true"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-55 group-hover/strip:opacity-75 transition-opacity duration-300"
              aria-hidden="true"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"
              aria-hidden="true"
            ></div>

            <img
              alt="Juanfer Quintero celebrando con River Plate"
              width="320"
              height="480"
              decoding="async"
              class="w-full h-full object-cover transform skew-x-6 sm:skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-[filter] duration-500"
              src="/juanfer.jpg"
            />
          </div>
        </div>

        <div
          class="relative w-[82px] sm:w-28 lg:w-32 h-64 sm:h-80 lg:h-[28rem] z-20 group/strip"
        >
          <div
            class="absolute inset-0 border-[3px] border-river-black translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
            aria-hidden="true"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-55 group-hover/strip:opacity-75 transition-opacity duration-300"
              aria-hidden="true"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/5 mix-blend-color z-10"
              aria-hidden="true"
            ></div>

            <img
              alt="Estadio Más Monumental de River Plate"
              width="320"
              height="520"
              decoding="async"
              class="w-full h-full object-cover transform skew-x-6 sm:skew-x-12 scale-150"
              src="/Monumental2.jpg"
            />
          </div>
        </div>

        <div
          class="relative w-[82px] sm:w-28 lg:w-32 h-52 sm:h-72 lg:h-96 transform translate-y-4 lg:translate-y-6 z-10 group/strip"
        >
          <div
            class="absolute inset-0 border-[3px] border-river-red translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
            aria-hidden="true"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-55 group-hover/strip:opacity-75 transition-opacity duration-300"
              aria-hidden="true"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"
              aria-hidden="true"
            ></div>

            <img
              alt="Ignacio Scocco con la camiseta de River Plate"
              width="320"
              height="480"
              decoding="async"
              class="w-full h-full object-cover transform skew-x-6 sm:skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-[filter] duration-500"
              src="/scocco.jpg"
            />
          </div>
        </div>
      </div>

      <img
        src="/Spidercarp.png"
        alt="Spidercarp"
        width="420"
        height="520"
        fetchpriority="high"
        decoding="async"
        class="lg:hidden absolute bottom-0 right-0 sm:right-6 z-30 h-[235px] sm:h-[320px] w-auto object-contain pointer-events-none drop-shadow-2xl"
      />
    </div>
  </div>

  <img
    src="/Spidercarp.png"
    alt="Spidercarp"
    width="420"
    height="520"
    fetchpriority="high"
    decoding="async"
    class="hidden lg:block absolute -bottom-[10px] right-[4%] xl:right-[9%] z-30 h-[76%] xl:h-[80%] w-auto object-contain pointer-events-none drop-shadow-2xl"
  />
</section>

<ScheduleDialog bind:open={isScheduleOpen} />

<style>
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 88%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, -88%, 0);
    }
  }

  .animate-slide-in {
    will-change: transform;
    transform: translate3d(0, 88%, 0);
    animation: slideInUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-slide-out {
    will-change: transform;
    transform: translate3d(0, 0, 0);
    animation: slideOutUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .layered-black {
    text-shadow:
      4px 4px 0px rgba(0, 0, 0, 0.15),
      8px 8px 0px rgba(0, 0, 0, 0.05);
  }

  .layered-red {
    text-shadow:
      4px 4px 0px rgba(239, 68, 68, 0.2),
      8px 8px 0px rgba(239, 68, 68, 0.08);
  }
</style>
