<script lang="ts">
  import Button from "./Button.svelte";
</script>

<section
  class="px-spacing-24 py-spacing-40 max-w-7xl mx-auto border-b border-river-black bg-river-white"
  id="comunidad"
>
  <div class="grid-12 font-display">
    <div class="col-span-12 text-center mb-spacing-24">
      <h2
        class="font-display font-bold text-display text-river-black uppercase leading-none mb-4"
      >
        COLABS Y <span class="text-river-red inline-block">BARDO</span>
      </h2>
    </div>

    <div
      class="col-span-12 md:col-span-6 winamp-card bg-river-black text-river-white flex flex-col justify-center items-center text-center p-12 hover:shadow-2xl transition-all duration-300"
    >
      <span class="material-symbols-outlined text-6xl text-river-red mb-4"
        >mic</span
      >
      <h3 class="font-display text-heading-lg uppercase mb-2">
        Discords con<br />BOCAENLACOPA
      </h3>
      <p class="font-display mb-6 opacity-80">
        El clásico del stream. Debates picantes, chicanas y mucho folklore del
        fútbol argentino.
      </p>
      <Button text="Ver Mejores Momentos" variant="primary">
        {#snippet icon()}
          <span class="material-symbols-outlined">videocam</span>
        {/snippet}
      </Button>
    </div>

    <div
      class="col-span-12 md:col-span-6 winamp-card flex flex-col justify-center items-center text-center p-12 border-4 border-dashed border-river-black hover:shadow-2xl transition-all duration-300"
    >
      <span class="material-symbols-outlined text-6xl text-river-black mb-4"
        >handshake</span
      >
      <h3 class="font-display text-heading-lg uppercase text-river-black mb-2">
        Invitados<br />Especiales
      </h3>
      <p class="font-display text-on-surface mb-6">
        Ex jugadores, periodistas y otros streamers se suman a la mesa para
        hablar del Más Grande.
      </p>
      <Button text="Ver Playlist" variant="ghost">
        {#snippet icon()}
          <span class="material-symbols-outlined">playlist_play</span>
        {/snippet}
      </Button>
    </div>
  </div>
</section>
