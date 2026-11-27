<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount } from "svelte";
  import { subscribeMediaQuery } from "../utils/viewport";

  interface Props {
    text: string;
    variant?: "primary" | "ghost" | "black";
    href?: string;
    target?: string;
    type?: "button" | "submit";
    ariaLabel?: string;
    ariaHaspopup?: "dialog" | "menu" | "listbox" | "tree" | "grid" | "true" | "false";
    ariaExpanded?: boolean;
    class?: string;
    icon?: Snippet;
    onclick?: (event: MouseEvent) => void;
  }

  let {
    text,
    variant = "primary",
    href = undefined,
    target = undefined,
    type = "button",
    ariaLabel = undefined,
    ariaHaspopup = undefined,
    ariaExpanded = undefined,
    class: customClass = "",
    icon,
    onclick,
  }: Props = $props();

  let buttonEl: HTMLElement | null = $state(null);
  let iconEl: HTMLElement | null = $state(null);

  let isHovered = $state(false);
  let supportsHover = $state(false);
  let reducedMotion = $state(false);
  let buttonWidth = $state(0);
  let iconWidth = $state(0);

  let animateSlide = $derived(isHovered && supportsHover && !reducedMotion);

  let translateDistance = $derived(
    Math.max(0, buttonWidth - iconWidth - 32),
  );

  let variantClasses = $derived(
    variant === "primary"
      ? "bg-river-red text-river-white hover:bg-river-white hover:text-river-red border-[2px] border-river-red"
      : variant === "ghost"
        ? "bg-river-white text-river-black border-[2px] border-river-black hover:bg-river-black hover:text-river-white"
        : "bg-river-black text-river-white hover:bg-river-white hover:text-river-black border-[2px] border-river-black",
  );

  function measure() {
    if (buttonEl) {
      buttonWidth = buttonEl.clientWidth;
    }
    if (iconEl) {
      iconWidth = iconEl.clientWidth;
    }
  }

  onMount(() => {
    const stopHover = subscribeMediaQuery(
      "(hover: hover) and (pointer: fine)",
      (matches) => {
        supportsHover = matches;
        if (!matches) {
          isHovered = false;
        }
      },
    );
    const stopMotion = subscribeMediaQuery(
      "(prefers-reduced-motion: reduce)",
      (matches) => {
        reducedMotion = matches;
      },
    );

    return () => {
      stopHover();
      stopMotion();
    };
  });

  $effect(() => {
    const btn = buttonEl;
    const icn = iconEl;
    if (!btn) return;

    measure();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(btn);
    if (icn) {
      observer.observe(icn);
    }

    return () => {
      observer.disconnect();
    };
  });

  function handleMouseEnter() {
    if (supportsHover) {
      isHovered = true;
    }
  }

  function handleMouseLeave() {
    isHovered = false;
  }
</script>

{#snippet innerContent()}
  <span
    class="font-sans text-[12px] tracking-wider uppercase invisible select-none mr-8 whitespace-nowrap"
    aria-hidden="true"
  >
    {text}
  </span>

  <span
    bind:this={iconEl}
    style="transform: translate({animateSlide ? translateDistance : 0}px, -50%);"
    class="flex items-center justify-center absolute left-4 top-1/2 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 pointer-events-none"
    aria-hidden="true"
  >
    {#if icon}
      {@render icon()}
    {/if}
  </span>

  <span
    style="transform: translate(0px, {animateSlide ? '150%' : '-50%'});"
    class="font-sans text-[12px] tracking-wider uppercase absolute right-4 top-1/2 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 whitespace-nowrap"
  >
    {text}
  </span>

  <span
    style="transform: translate(0px, {animateSlide ? '-50%' : '-250%'});"
    class="font-sans text-[12px] tracking-wider uppercase absolute left-4 top-1/2 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 pointer-events-none whitespace-nowrap"
    aria-hidden="true"
  >
    {text}
  </span>
{/snippet}

{#if href}
  <a
    bind:this={buttonEl}
    {href}
    {target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class="w-full sm:w-auto sm:min-w-[12.5rem] max-w-[16rem] flex items-center justify-between px-4 py-2.5 overflow-hidden relative cursor-pointer font-bold transition-[transform,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[46px] {variantClasses} {customClass}"
    aria-label={ariaLabel || text}
    {onclick}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
  >
    {@render innerContent()}
  </a>
{:else}
  <button
    bind:this={buttonEl}
    {type}
    class="w-full sm:w-auto sm:min-w-[12.5rem] max-w-[16rem] flex items-center justify-between px-4 py-2.5 overflow-hidden relative cursor-pointer font-bold transition-[transform,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[46px] {variantClasses} {customClass}"
    aria-label={ariaLabel || text}
    aria-haspopup={ariaHaspopup}
    aria-expanded={ariaExpanded}
    {onclick}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
  >
    {@render innerContent()}
  </button>
{/if}
