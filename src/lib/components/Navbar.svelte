<script lang="ts">
  import Button from './Button.svelte';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-0 w-full z-50 bg-river-white border-b border-river-black px-spacing-24 py-spacing-16">
  <div class="max-w-7xl mx-auto grid-12 items-center">
    <div class="col-span-12 md:col-span-3 flex items-center justify-between md:justify-start">
      <a class="text-heading font-heading font-bold text-river-red uppercase tracking-tighter" href="/">SPIDERCARP</a>
      <button 
         class="md:hidden p-2" 
         aria-label="Toggle menu" 
         aria-expanded={isMenuOpen}
         on:click={toggleMenu}
      >
        <span class="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
      </button>
    </div>
    <div class="hidden md:flex col-span-6 justify-center gap-spacing-16">
      <a class="text-river-red font-bold border-b-2 border-river-red pb-1 font-heading-lg text-heading-lg md:text-heading font-heading focus:ring-2 focus:ring-river-red outline-none" href="#clips">Clips</a>
      <a class="text-on-surface font-medium hover:text-river-red transition-colors duration-200 font-heading-lg text-heading-lg md:text-heading font-heading focus:ring-2 focus:ring-river-red outline-none" href="#tweets">Tweets</a>
      <a class="text-on-surface font-medium hover:text-river-red transition-colors duration-200 font-heading-lg text-heading-lg md:text-heading font-heading focus:ring-2 focus:ring-river-red outline-none" href="#comunidad">Comunidad</a>
      <a class="text-on-surface font-medium hover:text-river-red transition-colors duration-200 font-heading-lg text-heading-lg md:text-heading font-heading focus:ring-2 focus:ring-river-red outline-none" href="#paladar">Paladar</a>
    </div>
    <div class="hidden md:flex col-span-3 justify-end items-center">
      <Button text="Unite al Stream" variant="primary" href="https://kick.com/spidercarp23" target="_blank">
        {#snippet icon()}
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
        {/snippet}
      </Button>
    </div>
  </div>
  
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-river-white border-b border-river-black py-4 px-spacing-24 flex flex-col gap-4 shadow-lg">
      <a class="text-river-red font-bold font-heading text-xl" href="#clips" on:click={toggleMenu}>Clips</a>
      <a class="text-on-surface font-medium hover:text-river-red font-heading text-xl" href="#tweets" on:click={toggleMenu}>Tweets</a>
      <a class="text-on-surface font-medium hover:text-river-red font-heading text-xl" href="#comunidad" on:click={toggleMenu}>Comunidad</a>
      <a class="text-on-surface font-medium hover:text-river-red font-heading text-xl" href="#paladar" on:click={toggleMenu}>Paladar</a>
      <Button text="Unite al Stream" variant="primary" href="https://kick.com/spidercarp23" target="_blank">
        {#snippet icon()}
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
        {/snippet}
      </Button>
    </div>
  {/if}
</nav>
