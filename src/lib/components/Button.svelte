<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    text: string;
    variant?: 'primary' | 'ghost' | 'black';
    href?: string;
    type?: 'button' | 'submit';
    ariaLabel?: string;
    class?: string;
    icon?: Snippet;
    onclick?: (event: MouseEvent) => void;
  }

  let {
    text,
    variant = 'primary',
    href = undefined,
    type = 'button',
    ariaLabel = undefined,
    class: customClass = '',
    icon,
    onclick
  }: Props = $props();

  let buttonEl: HTMLElement | null = $state(null);
  let iconEl: HTMLElement | null = $state(null);

  let isHovered = $state(false);

  let translateDistance = $derived.by(() => {
    if (buttonEl && iconEl) {
      const btnWidth = buttonEl.clientWidth;
      const iconWidth = iconEl.clientWidth;
      return btnWidth - iconWidth - 32;
    }
    return 0;
  });

  let variantClasses = $derived(
    variant === 'primary'
      ? 'bg-river-red text-river-white hover:bg-river-white hover:text-river-red hover:border-river-red border border-river-red'
      : variant === 'ghost'
        ? 'bg-transparent text-river-black border-river-black hover:bg-river-black hover:text-river-white border'
        : 'bg-river-black text-river-white hover:bg-river-white hover:text-river-black hover:border-river-black border border-river-black'
  );
</script>

{#if href}
  <a
    bind:this={buttonEl}
    {href}
    class="w-full flex items-center justify-between px-4 py-2 overflow-hidden relative cursor-pointer font-semibold transition-all duration-300 md:max-w-[15rem] group min-h-[44px] {variantClasses} {customClass}"
    aria-label={ariaLabel || text}
    onmouseenter={() => isHovered = true}
    onmouseleave={() => isHovered = false}
  >
    <span class="font-mono text-[12px] uppercase invisible select-none mr-8" aria-hidden="true">
      {text}
    </span>

    <span
      bind:this={iconEl}
      style="transform: translate({isHovered ? translateDistance : 0}px, -50%);"
      class="flex items-center justify-center absolute left-4 top-1/2 transition-transform duration-500 ease-in-out z-10"
    >
      {#if icon}
        {@render icon()}
      {/if}
    </span>

    <span
      style="transform: translate(0px, {isHovered ? '150%' : '-50%'});"
      class="font-mono text-[12px] uppercase absolute right-4 top-1/2 transition-transform duration-500 ease-in-out z-10"
    >
      {text}
    </span>

    <span
      style="transform: translate(0px, {isHovered ? '-50%' : '-250%'});"
      class="font-mono text-[12px] uppercase absolute left-4 top-1/2 transition-transform duration-500 ease-in-out z-10 pointer-events-none"
    >
      {text}
    </span>
  </a>
{:else}
  <button
    bind:this={buttonEl}
    {type}
    class="w-full flex items-center justify-between px-4 py-2 overflow-hidden relative cursor-pointer font-semibold transition-all duration-300 md:max-w-[15rem] group min-h-[44px] {variantClasses} {customClass}"
    aria-label={ariaLabel || text}
    onclick={onclick}
    onmouseenter={() => isHovered = true}
    onmouseleave={() => isHovered = false}
  >
    <span class="font-mono text-[12px] uppercase invisible select-none mr-8" aria-hidden="true">
      {text}
    </span>

    <span
      bind:this={iconEl}
      style="transform: translate({isHovered ? translateDistance : 0}px, -50%);"
      class="flex items-center justify-center absolute left-4 top-1/2 transition-transform duration-500 ease-in-out z-10"
    >
      {#if icon}
        {@render icon()}
      {/if}
    </span>

    <span
      style="transform: translate(0px, {isHovered ? '150%' : '-50%'});"
      class="font-mono text-[12px] uppercase absolute right-4 top-1/2 transition-transform duration-500 ease-in-out z-10"
    >
      {text}
    </span>

    <span
      style="transform: translate(0px, {isHovered ? '-50%' : '-250%'});"
      class="font-mono text-[12px] uppercase absolute left-4 top-1/2 transition-transform duration-500 ease-in-out z-10 pointer-events-none"
    >
      {text}
    </span>
  </button>
{/if}

<style>
</style>
