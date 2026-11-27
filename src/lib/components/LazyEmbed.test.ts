import { fireEvent, render, screen } from "@testing-library/svelte";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LazyEmbed from "./LazyEmbed.svelte";

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

let observerCallback: ObserverCallback | null = null;
const originalIntersectionObserver = globalThis.IntersectionObserver;

class MockIntersectionObserver {
  constructor(cb: ObserverCallback) {
    observerCallback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("LazyEmbed", () => {
  beforeEach(() => {
    observerCallback = null;
    globalThis.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver;
    vi.useRealTimers();
  });

  it("defers mounting the iframe until the element intersects", async () => {
    const { container } = render(LazyEmbed, {
      props: {
        src: "https://player.kick.com/spidercarp23",
        title: "Stream de Kick",
        provider: "Kick",
        fallbackUrl: "https://kick.com/spidercarp23",
        fallbackCta: "Abrir en Kick",
      },
    });

    expect(container.querySelector("iframe")).toBeNull();
    expect(screen.getByText(/cargando reproductor de kick/i)).toBeInTheDocument();

    observerCallback?.([{ isIntersecting: true }]);

    const iframe = await screen.findByTitle("Stream de Kick");
    expect(iframe).toHaveAttribute("src", "https://player.kick.com/spidercarp23");
  });

  it("shows fallback card on iframe error and supports retry", async () => {
    render(LazyEmbed, {
      props: {
        src: "https://player.kick.com/spidercarp23",
        title: "Stream de Kick",
        provider: "Kick",
        fallbackUrl: "https://kick.com/spidercarp23",
        fallbackCta: "Abrir en Kick",
      },
    });

    observerCallback?.([{ isIntersecting: true }]);
    const iframe = await screen.findByTitle("Stream de Kick");
    await fireEvent.error(iframe);

    expect(
      await screen.findByText(/no se pudo cargar el reproductor embebido/i),
    ).toBeInTheDocument();

    const retryButton = screen.getByRole("button", { name: /reintentar/i });
    await fireEvent.click(retryButton);

    expect(await screen.findByTitle("Stream de Kick")).toBeInTheDocument();
  });

  it("falls back when iframe does not finish loading before timeout", async () => {
    vi.useFakeTimers();

    render(LazyEmbed, {
      props: {
        src: "https://player.kick.com/spidercarp23",
        title: "Stream lento",
        provider: "Kick",
        fallbackUrl: "https://kick.com/spidercarp23",
        fallbackCta: "Abrir en Kick",
        timeoutMs: 1000,
      },
    });

    observerCallback?.([{ isIntersecting: true }]);
    await vi.advanceTimersByTimeAsync(1100);

    expect(
      screen.getByText(/no se pudo cargar el reproductor embebido/i),
    ).toBeInTheDocument();
  });
});
