import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import TikToks from "./TikToks.svelte";
import { EXTERNAL_LINKS, TIKTOK_VIDEOS } from "../data/site";

describe("TikToks", () => {
  it("renders the TikTok showcase without the removed Twitter section", () => {
    const { container } = render(TikToks);

    expect(
      screen.getByRole("heading", { name: /contenido en tiktok/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/seguime en twitter/i)).not.toBeInTheDocument();

    const embeds = container.querySelectorAll("blockquote.tiktok-embed");
    expect(embeds).toHaveLength(TIKTOK_VIDEOS.length);

    const cta = screen.getByRole("link", { name: /ir al canal de tiktok/i });
    expect(cta).toHaveAttribute("href", EXTERNAL_LINKS.tiktokProfile);
  });
});
