import { render, screen } from "@testing-library/svelte";
import { describe, expect, it, vi } from "vitest";
import LiveStatusBadge from "./LiveStatusBadge.svelte";

describe("LiveStatusBadge", () => {
  it("renders pulsing EN VIVO badge with viewer count when live", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        livestream: { is_live: true, viewer_count: 1320, session_title: "River en vivo" },
      }),
    });

    render(LiveStatusBadge, {
      props: {
        channel: "spidercarp23",
        fetcher: fetcher as unknown as typeof fetch,
      },
    });

    expect(await screen.findByText("EN VIVO")).toBeInTheDocument();
    expect(screen.getByText(/1[.,]320/)).toBeInTheDocument();
  });

  it("renders clean fallback link when status fetch fails", async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error("CORS blocked"));

    render(LiveStatusBadge, {
      props: {
        channel: "spidercarp23",
        fetcher: fetcher as unknown as typeof fetch,
      },
    });

    const link = await screen.findByRole("link", {
      name: /ir al canal oficial de spidercarp23 en kick/i,
    });
    expect(link).toHaveAttribute("href", "https://kick.com/spidercarp23");
    expect(screen.getByText(/KICK · SPIDERCARP23/i)).toBeInTheDocument();
  });
});
