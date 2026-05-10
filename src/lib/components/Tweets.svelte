<script lang="ts">
  import Button from './Button.svelte';
</script>

<section
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black"
  id="tweets"
>
  <div class="relative max-w-3xl mx-auto text-center font-display">
    <img
      src="/P8.png"
      alt="P8 sticker"
      class="absolute -right-6 md:-right-16 -bottom-10 z-20 h-[50%] md:h-[75%] w-auto object-contain pointer-events-none drop-shadow-2xl"
    />

    <h2
      class="font-display font-bold text-display text-river-black uppercase leading-none mb-4"
    >
      SEGUIME EN <span class="text-river-red">TWITTER</span>
    </h2>
    <p class="font-display text-subheading text-on-surface max-w-xl mx-auto mb-8">
      Opiniones calientes, reacciones al instante y el bardo que no llega al stream.
    </p>
    <Button text="Seguir en Twitter" variant="primary" href="https://x.com/SpiderCarp23" target="_blank">
      {#snippet icon()}
        <svg viewBox="0 0 512 462.799" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" fill="currentColor"/>
        </svg>
      {/snippet}
    </Button>
  </div>
</section>
