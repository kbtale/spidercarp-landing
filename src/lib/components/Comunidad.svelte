<script lang="ts">
  import Button from "./Button.svelte";
</script>

<section
  id="comunidad"
  class="relative px-spacing-24 py-spacing-40 md:py-32 max-w-7xl mx-auto text-center font-display"
>
  <img
    src="/P2.png"
    alt="P2 sticker"
    class="absolute left-2 md:left-8 -bottom-[20px] z-10 h-[45%] md:h-[75%] w-auto object-contain pointer-events-none drop-shadow-2xl"
  />
  <h2
    class="font-display font-bold text-display text-river-black uppercase leading-none mb-6"
  >
    UNITE A LA <br /><span class="text-river-red">TELARAÑA MILLONARIA</span>
  </h2>
  <p
    class="font-display text-subheading text-on-surface max-w-2xl mx-auto mb-8"
  >
    Sumate al Discord, suscribite en Kick y se parte de la comunidad más gallina
    de internet.
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Button
      text="Suscribirse en Kick"
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
    <Button
      text="Entrar al Discord"
      variant="ghost"
      href="https://discord.gg/5f4dve8Fd"
      target="_blank"
    >
      {#snippet icon()}
        <span class="material-symbols-outlined">forum</span>
      {/snippet}
    </Button>
  </div>
</section>
