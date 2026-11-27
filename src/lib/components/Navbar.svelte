<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  import { EXTERNAL_LINKS, NAV_ITEMS, SITE_META } from "../data/site";

  let isMenuOpen = $state(false);
  let activeSection = $state("inicio");
  let hoveredSection = $state<string | null>(null);

  let sliderLeft = $state(0);
  let sliderWidth = $state(0);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function scrollToSection(id: string, e: MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      activeSection = id;
      if (isMenuOpen) {
        isMenuOpen = false;
      }
    }
  }

  function updateSlider(targetId: string) {
    const activeEl = document.getElementById(`nav-link-${targetId}`);
    if (activeEl) {
      sliderLeft = activeEl.offsetLeft;
      sliderWidth = activeEl.offsetWidth;
    }
  }

  $effect(() => {
    updateSlider(hoveredSection ?? activeSection);
  });

  onMount(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        activeSection = NAV_ITEMS[NAV_ITEMS.length - 1].id;
        return;
      }

      const headerOffset = 150;
      let activeId = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            activeId = item.id;
          }
        }
      }
      activeSection = activeId;
    };

    const handleResize = () => updateSlider(hoveredSection ?? activeSection);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    handleScroll();
    const timer = setTimeout(handleResize, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<nav
  aria-label="Navegación principal"
  class="fixed top-0 w-full z-50 bg-river-white border-b-[3px] border-river-black px-spacing-24 py-spacing-16"
>
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
    <div class="flex items-center flex-shrink-0">
      <a
        class="flex items-center gap-2"
        href="#inicio"
        onclick={(e) => scrollToSection("inicio", e)}
      >
        <img
          src="/Spidercarp-logo.webp"
          alt="Logo de Spidercarp"
          width="32"
          height="32"
          class="h-8 w-auto object-contain"
        />
        <span
          class="text-heading font-heading font-bold text-river-red uppercase tracking-tighter"
          translate="no">{SITE_META.brand}</span
        >
      </a>
    </div>

    <div
      class="hidden lg:flex items-center justify-center gap-6 xl:gap-8 relative py-1 flex-grow"
    >
      {#each NAV_ITEMS as item (item.id)}
        <a
          id="nav-link-{item.id}"
          class="text-sm lg:text-base font-heading font-semibold uppercase tracking-wider transition-colors duration-200 pb-2 {(hoveredSection ??
            activeSection) === item.id
            ? 'text-river-red font-bold'
            : 'text-on-surface font-medium hover:text-river-red'} whitespace-nowrap"
          href={item.href}
          aria-current={activeSection === item.id ? "location" : undefined}
          onclick={(e) => scrollToSection(item.id, e)}
          onmouseenter={() => (hoveredSection = item.id)}
          onmouseleave={() => (hoveredSection = null)}
        >
          {item.label}
        </a>
      {/each}

      <div
        class="absolute bottom-0 h-[4px] bg-river-red transition-all duration-300 ease-out"
        style="left: {sliderLeft}px; width: {sliderWidth}px;"
        aria-hidden="true"
      ></div>
    </div>

    <div class="hidden lg:flex items-center gap-4 flex-shrink-0">
      <SocialLinks tone="dark" size="sm" class="gap-1" />

      <Button
        text="Unite al Stream"
        variant="primary"
        href={EXTERNAL_LINKS.kickChannel}
        target="_blank"
      >
        {#snippet icon()}
          <span
            class="material-symbols-outlined"
            aria-hidden="true"
            style="font-variation-settings: 'FILL' 1;">play_arrow</span
          >
        {/snippet}
      </Button>
    </div>

    <button
      type="button"
      class="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center border-[3px] border-river-black bg-river-white text-river-black"
      aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      aria-expanded={isMenuOpen}
      onclick={toggleMenu}
    >
      <span class="material-symbols-outlined" aria-hidden="true"
        >{isMenuOpen ? "close" : "menu"}</span
      >
    </button>
  </div>

  {#if isMenuOpen}
    <div
      class="lg:hidden absolute top-full left-0 w-full bg-river-white border-b-[3px] border-river-black py-6 px-spacing-24 flex flex-col gap-4 shadow-lg"
    >
      {#each NAV_ITEMS as item (item.id)}
        <a
          class="font-heading text-xl uppercase transition-colors duration-200 {activeSection ===
          item.id
            ? 'text-river-red font-bold'
            : 'text-on-surface font-medium hover:text-river-red'}"
          href={item.href}
          aria-current={activeSection === item.id ? "location" : undefined}
          onclick={(e) => scrollToSection(item.id, e)}
        >
          {item.label}
        </a>
      {/each}

      <div class="py-3 border-t border-b border-river-black/15">
        <SocialLinks tone="dark" size="md" class="justify-between" />
      </div>

      <Button
        text="Unite al Stream"
        variant="primary"
        href={EXTERNAL_LINKS.kickChannel}
        target="_blank"
        onclick={toggleMenu}
      >
        {#snippet icon()}
          <span
            class="material-symbols-outlined"
            aria-hidden="true"
            style="font-variation-settings: 'FILL' 1;">play_arrow</span
          >
        {/snippet}
      </Button>
    </div>
  {/if}
</nav>
