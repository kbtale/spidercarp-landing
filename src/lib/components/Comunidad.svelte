<script lang="ts">
  import Button from "./Button.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { EXTERNAL_LINKS } from "../data/site";
</script>

<section
  id="comunidad"
  class="relative px-4 sm:px-spacing-24 py-spacing-40 md:py-28 lg:py-32 max-w-7xl mx-auto text-center font-display"
>
  <img
    src="/P2.png"
    alt=""
    aria-hidden="true"
    width="180"
    height="180"
    loading="lazy"
    decoding="async"
    class="h-24 sm:h-28 mx-auto mb-5 lg:mb-0 lg:mx-0 lg:absolute lg:left-8 lg:-bottom-5 z-10 lg:h-[75%] w-auto object-contain pointer-events-none drop-shadow-2xl"
  />

  <h2
    class="font-display font-bold text-display text-river-black uppercase leading-none mb-6 relative z-20"
  >
    UNITE A LA <br /><span class="text-river-red">TELARAÑA MILLONARIA</span>
  </h2>

  <p
    class="font-display text-subheading text-on-surface max-w-2xl mx-auto mb-8 relative z-20"
  >
    Sumate al Discord, suscribite en Kick y se parte de la comunidad más gallina
    de internet.
  </p>

  <div
    class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center relative z-20"
  >
    <Button
      text="Suscribirse en Kick"
      variant="primary"
      href={EXTERNAL_LINKS.kickChannel}
      target="_blank"
      class="max-w-none sm:max-w-[16rem]"
    >
      {#snippet icon()}
        <UiIcon name="play" class="w-5 h-5" />
      {/snippet}
    </Button>

    <Button
      text="Entrar al Discord"
      variant="ghost"
      href={EXTERNAL_LINKS.discord}
      target="_blank"
      class="max-w-none sm:max-w-[15rem]"
    >
      {#snippet icon()}
        <UiIcon name="forum" class="w-5 h-5" />
      {/snippet}
    </Button>
  </div>
</section>
