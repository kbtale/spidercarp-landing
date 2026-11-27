<script lang="ts">
  export type UiIconName =
    | "play"
    | "calendar"
    | "menu"
    | "close"
    | "arrow-right"
    | "launch"
    | "forum";

  interface Props {
    name: UiIconName;
    class?: string;
  }

  let { name, class: iconClass = "w-5 h-5" }: Props = $props();
</script>

{#if name === "play"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-current shrink-0"
    aria-hidden="true"
  >
    <path d="M8 5.14v13.72L19 12 8 5.14z" />
  </svg>
{:else if name === "calendar"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.2"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="17" />
    <path d="M3 10h18M8 2v4M16 2v4" />
  </svg>
{:else if name === "menu"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.5"
    stroke-linecap="square"
    aria-hidden="true"
  >
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
{:else if name === "close"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.5"
    stroke-linecap="square"
    aria-hidden="true"
  >
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
{:else if name === "arrow-right"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.4"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
  >
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
{:else if name === "launch"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.2"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
  >
    <path d="M14 4h6v6M10 14L20 4M19 14v6H4V5h6" />
  </svg>
{:else if name === "forum"}
  <svg
    viewBox="0 0 24 24"
    class="{iconClass} fill-none stroke-current shrink-0"
    stroke-width="2.2"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
  >
    <path d="M4 5h12v9H8l-4 3V5zM16 9h4v10l-3-2h-7v-3" />
  </svg>
{/if}
