<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  const words = [
    "MILLONARIA",
    "RIVERPLATENSE",
    "MONUMENTAL",
    "MUNDIAL",
    "FUTBOLERA",
    "SPIDERCARP"
  ];
  
  let currentIndex = $state(0);
  let prevIndex = $derived(currentIndex === 0 ? words.length - 1 : currentIndex - 1);

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
    }, 3000);
    return () => clearInterval(interval);
  });
</script>

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
    animation: slideInUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-slide-out {
    will-change: transform;
    transform: translate3d(0, 0, 0);
    animation: slideOutUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

<section
  class="relative px-spacing-24 py-spacing-40 md:py-32 border-b border-river-black overflow-hidden min-h-[72vh] flex items-center"
>
  <div class="absolute inset-0 parallax-bg opacity-20 filter grayscale"></div>
  <div
    class="absolute inset-0 bg-gradient-to-r from-river-white via-river-white/90 to-transparent"
  ></div>

  <div class="max-w-6xl mx-auto grid-12 relative z-10 w-full">
    <div class="col-span-12 md:col-span-7 space-y-6">
      <h1
        class="font-display text-display text-river-black uppercase leading-none tracking-tighter"
      >
        <span class="layered-black">VIVÍ LA</span> <br />
        <span class="layered-black">LOCURA</span> <br />
        <span class="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.15em] relative align-bottom pe-4">
          {#key currentIndex}
            <span class="col-start-1 row-start-1 text-river-red inline-block layered-red whitespace-nowrap animate-slide-out">
              {words[prevIndex]}
            </span>
            <span class="col-start-1 row-start-1 text-river-red inline-block layered-red whitespace-nowrap animate-slide-in">
              {words[currentIndex]}
            </span>
          {/key}
        </span>
      </h1>
      <p
        class="font-subheading text-subheading text-on-surface max-w-xl bg-river-white/80 p-4 rounded-lg winamp-border backdrop-blur-sm shadow-sm"
      >
        El destino digital definitivo para los hinchas de River Plate.
        Reacciones en vivo, análisis táctico, mucho humo y la mejor comunidad de
        la red.
      </p>
      <div class="flex gap-4 pt-4">
        <Button
          text="Ver en Vivo (Kick)"
          variant="primary"
          href="https://kick.com/spidercarp23"
          target="_blank"
        >
          {#snippet icon()}
            <span
              class="material-symbols-outlined"
              style="font-variation-settings: 'FILL' 1;">play_arrow</span
            >
          {/snippet}
        </Button>
        <Button text="Cronograma" variant="ghost">
          {#snippet icon()}
            <span class="material-symbols-outlined">calendar_today</span>
          {/snippet}
        </Button>
      </div>
    </div>

    <div
      class="col-span-12 md:col-span-5 relative mt-8 md:mt-0 flex justify-center items-center h-[420px] md:h-[520px]"
    >
      <div class="flex gap-4 transform -skew-x-12 md:-translate-y-16 md:-translate-x-6">
        <div
          class="relative w-28 md:w-32 h-72 md:h-96 transform -translate-y-6 z-10 group/strip"
        >
          <div
            class="absolute inset-0 border border-river-red translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"
            ></div>

            <img
              alt="Juanfer"
              class="w-full h-full object-cover transform skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-all duration-500"
              src="/juanfer.jpg"
            />
          </div>
        </div>

        <div class="relative w-28 md:w-32 h-96 md:h-[28rem] z-20 group/strip">
          <div
            class="absolute inset-0 border border-river-black translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/5 mix-blend-color z-10"
            ></div>

            <img
              alt="Monumental"
              class="w-full h-full object-cover transform skew-x-12 scale-150"
              src="/Monumental2.jpg"
            />
          </div>
        </div>

        <div
          class="relative w-28 md:w-32 h-72 md:h-96 transform translate-y-6 z-10 group/strip"
        >
          <div
            class="absolute inset-0 border border-river-red translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"
          ></div>

          <div
            class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"
            ></div>

            <div
              class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"
            ></div>

            <img
              alt="Scocco"
              class="w-full h-full object-cover transform skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-all duration-500"
              src="/scocco.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <img 
    src="/Spidercarp.png" 
    alt="Spidercarp" 
    class="absolute -bottom-[80px] md:-bottom-[10px] right-[2%] md:right-[4%] lg:right-[6%] xl:right-[9%] z-30 h-[68%] md:h-[76%] lg:h-[80%] w-auto object-contain pointer-events-none drop-shadow-2xl"
  />
</section>
