import { render, screen } from "@testing-library/svelte";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import TikToks from "./TikToks.svelte";
import { EXTERNAL_LINKS, TIKTOK_VIDEOS } from "../data/site";

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

describe("TikToks", () => {
  beforeEach(() => {
    observerCallback = null;
    document
      .querySelectorAll('script[src="https://www.tiktok.com/embed.js"]')
      .forEach((el) => el.remove());
    globalThis.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver;
  });

  it("renders fallback TikTok cards without Twitter section and defers embed.js until intersecting", async () => {
    const { container } = render(TikToks);

    expect(
      screen.getByRole("heading", { name: /contenido en tiktok/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/seguime en twitter/i)).not.toBeInTheDocument();
    expect(
      document.querySelector('script[src="https://www.tiktok.com/embed.js"]'),
    ).toBeNull();

    const fallbackButtons = screen.getAllByRole("link", {
      name: /ver video en tiktok/i,
    });
    expect(fallbackButtons).toHaveLength(TIKTOK_VIDEOS.length);

    observerCallback?.([{ isIntersecting: true }]);

    await screen.findAllByRole("link", { name: /ver video en tiktok/i });
    expect(
      document.querySelector('script[src="https://www.tiktok.com/embed.js"]'),
    ).not.toBeNull();
    expect(container.querySelectorAll("blockquote.tiktok-embed")).toHaveLength(
      TIKTOK_VIDEOS.length,
    );

    const cta = screen.getByRole("link", { name: /ir al canal de tiktok/i });
    expect(cta).toHaveAttribute("href", EXTERNAL_LINKS.tiktokProfile);
  });
});
