<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.head.appendChild(script);
  });
</script>

<section
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black"
  id="tweets"
>
  <div class="mb-spacing-32 text-center md:text-left">
    <h2
      class="font-display font-bold text-4xl md:text-5xl text-river-black uppercase leading-none tracking-tighter"
    >
      ÚLTIMAS NOVEDADES EN <span class="text-river-red">TWITTER</span>
    </h2>
  </div>

  <div
    class="max-w-3xl mx-auto h-[600px] border border-river-black bg-river-white p-spacing-16 overflow-y-auto"
  >
    <a
      class="twitter-timeline"
      data-height="560"
      data-theme="light"
      data-chrome="noheader nofooter noborders transparent"
      href="https://twitter.com/SpiderCarp23"
    >
      Cargando tweets en tiempo real de @SpiderCarp23...
    </a>
  </div>
</section>
