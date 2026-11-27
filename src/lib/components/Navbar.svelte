<script lang="ts">
  import { onMount } from "svelte";
  import {
    Drawer,
    DrawerBackdrop,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
  } from "@ui-sdk/svelte/drawer";
  import Button from "./Button.svelte";
  import LiveStatusBadge from "./LiveStatusBadge.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  import UiIcon from "./UiIcon.svelte";
  import { EXTERNAL_LINKS, NAV_ITEMS, SITE_META } from "../data/site";
  import { prefersReducedMotion } from "../utils/viewport";

  let isMenuOpen = $state(false);
  let activeSection = $state("inicio");
  let hoveredSection = $state<string | null>(null);

  let navListEl: HTMLElement | null = $state(null);
  let sliderLeft = $state(0);
  let sliderWidth = $state(0);

  function scrollToSection(id: string, e: MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
      activeSection = id;
    }
    if (isMenuOpen) {
      isMenuOpen = false;
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

  $effect(() => {
    const list = navListEl;
    if (!list || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => {
      updateSlider(hoveredSection ?? activeSection);
    });
    observer.observe(list);

    return () => observer.disconnect();
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

    const syncSlider = () => updateSlider(hoveredSection ?? activeSection);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncSlider);

    handleScroll();
    syncSlider();

    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) {
          syncSlider();
        }
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncSlider);
    };
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 bg-river-white border-b-[3px] border-river-black px-4 sm:px-spacing-24 py-3 sm:py-spacing-16"
>
  <nav
    aria-label="Navegación principal"
    class="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4"
  >
    <div class="flex items-center flex-shrink-0">
      <a
        class="flex items-center gap-2 min-h-[44px]"
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
          class="text-lg sm:text-heading font-heading font-bold text-river-red uppercase tracking-tighter"
          translate="no">{SITE_META.brand}</span
        >
      </a>
    </div>

    <div
      bind:this={navListEl}
      class="hidden lg:flex items-center justify-center gap-4 xl:gap-7 relative py-1 min-w-0"
    >
      {#each NAV_ITEMS as item (item.id)}
        <a
          id="nav-link-{item.id}"
          class="text-xs xl:text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 pb-2 {(hoveredSection ??
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
        class="absolute bottom-0 h-[4px] bg-river-red transition-[left,width] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style="left: {sliderLeft}px; width: {sliderWidth}px;"
        aria-hidden="true"
      ></div>
    </div>

    <div class="hidden lg:flex items-center gap-2.5 flex-shrink-0">
      <LiveStatusBadge compact class="hidden xl:inline-flex" />
      <SocialLinks
        tone="dark"
        size="sm"
        class="gap-0.5"
        linkClass="min-w-[34px] min-h-[34px]"
      />

      <Button
        text="Unite al Stream"
        variant="primary"
        href={EXTERNAL_LINKS.kickChannel}
        target="_blank"
        class="sm:min-w-[11rem]"
      >
        {#snippet icon()}
          <UiIcon name="play" class="w-5 h-5" />
        {/snippet}
      </Button>
    </div>

    <div class="lg:hidden flex items-center">
      <Drawer bind:open={isMenuOpen} side="right">
        <DrawerTrigger
          aria-label="Abrir menú de navegación"
          class="min-w-[44px] min-h-[44px] inline-flex items-center justify-center border-[3px] border-river-black bg-river-white text-river-black active:scale-[0.96] transition-transform duration-150 cursor-pointer"
        >
          <UiIcon name="menu" class="w-6 h-6" />
        </DrawerTrigger>

        <DrawerBackdrop />
        <DrawerContent
          class="w-[min(86vw,340px)] h-[100dvh] bg-river-white border-l-[3px] border-river-black flex flex-col justify-between p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] overflow-y-auto overscroll-contain shadow-[-8px_0_0_#000]"
        >
          <div class="flex flex-col gap-6">
            <div
              class="flex items-center justify-between gap-3 pb-4 border-b-[3px] border-river-black"
            >
              <div class="flex items-center gap-2">
                <img
                  src="/Spidercarp-logo.webp"
                  alt=""
                  aria-hidden="true"
                  width="28"
                  height="28"
                  class="h-7 w-auto object-contain"
                />
                <DrawerTitle
                  class="font-display font-bold text-xl text-river-red uppercase tracking-tighter"
                  translate="no"
                >
                  {SITE_META.brand}
                </DrawerTitle>
              </div>
              <DrawerClose
                aria-label="Cerrar menú de navegación"
                class="min-w-[44px] min-h-[44px] inline-flex items-center justify-center border-[3px] border-river-black bg-river-white text-river-black hover:bg-river-black hover:text-river-white transition-colors duration-150 cursor-pointer"
              >
                <UiIcon name="close" class="w-5 h-5" />
              </DrawerClose>
            </div>

            <DrawerDescription class="sr-only">
              Menú de secciones y redes sociales oficiales de Spidercarp.
            </DrawerDescription>

            <div class="flex flex-col divide-y divide-river-black/15">
              {#each NAV_ITEMS as item (item.id)}
                <a
                  class="font-display text-xl uppercase tracking-tight py-3 min-h-[48px] flex items-center justify-between gap-3 transition-colors duration-150 {activeSection ===
                  item.id
                    ? 'text-river-red font-bold'
                    : 'text-river-black font-semibold hover:text-river-red'}"
                  href={item.href}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  onclick={(e) => scrollToSection(item.id, e)}
                >
                  <span>{item.label}</span>
                  <UiIcon name="arrow-right" class="w-5 h-5" />
                </a>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-5 pt-6 border-t-[3px] border-river-black">
            <LiveStatusBadge class="w-fit" />

            <SocialLinks
              tone="dark"
              size="md"
              class="justify-between w-full"
            />

            <Button
              text="Unite al Stream"
              variant="primary"
              href={EXTERNAL_LINKS.kickChannel}
              target="_blank"
              class="max-w-none w-full"
              onclick={() => (isMenuOpen = false)}
            >
              {#snippet icon()}
                <UiIcon name="play" class="w-5 h-5" />
              {/snippet}
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  </nav>
</header>
