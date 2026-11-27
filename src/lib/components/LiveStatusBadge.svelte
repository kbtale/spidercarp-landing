<script lang="ts">
  import { onMount } from "svelte";
  import { EXTERNAL_LINKS, SITE_META } from "../data/site";
  import {
    fetchKickLiveStatus,
    formatViewerCount,
    type KickLiveStatus,
  } from "../utils/kickStatus";

  interface Props {
    channel?: string;
    compact?: boolean;
    initialStatus?: KickLiveStatus;
    fetcher?: typeof fetch;
    class?: string;
  }

  let {
    channel = SITE_META.handle,
    compact = false,
    initialStatus = undefined,
    fetcher = undefined,
    class: customClass = "",
  }: Props = $props();

  let status = $state<KickLiveStatus>({
    state: "unknown",
    viewers: null,
    title: null,
  });

  let activeStatus = $derived(initialStatus ?? status);
  let isLive = $derived(activeStatus.state === "live");

  onMount(() => {
    if (initialStatus) return;

    let active = true;
    fetchKickLiveStatus(channel, { fetcher }).then((result) => {
      if (active) {
        status = result;
      }
    });

    return () => {
      active = false;
    };
  });
</script>

<a
  href={EXTERNAL_LINKS.kickChannel}
  target="_blank"
  rel="noopener noreferrer"
  aria-live="polite"
  aria-label={isLive
    ? `Spidercarp está en vivo en Kick${activeStatus.viewers !== null ? ` con ${formatViewerCount(activeStatus.viewers)} espectadores` : ""}`
    : `Ir al canal oficial de ${channel} en Kick`}
  class="inline-flex items-center gap-2 border-[2px] font-display font-bold uppercase tracking-wider transition-colors duration-150 min-h-[36px] px-2.5 py-1 text-[11px] {isLive
    ? 'bg-river-red text-river-white border-river-black shadow-[3px_3px_0_#000] hover:bg-river-black'
    : 'bg-river-white text-river-black border-river-black hover:bg-river-black hover:text-river-white'} {customClass}"
>
  <span
    class="inline-block w-2.5 h-2.5 shrink-0 {isLive
      ? 'bg-river-white motion-safe:animate-pulse'
      : 'bg-river-red'}"
    aria-hidden="true"
  ></span>

  {#if isLive}
    <span>EN VIVO</span>
    {#if activeStatus.viewers !== null && !compact}
      <span class="tabular-nums opacity-90">
        · {formatViewerCount(activeStatus.viewers)}
      </span>
    {/if}
  {:else}
    <span>{compact ? "KICK" : `KICK · ${channel.toUpperCase()}`}</span>
  {/if}
</a>
