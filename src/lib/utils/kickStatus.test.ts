import { describe, expect, it, vi } from "vitest";
import {
  fetchKickLiveStatus,
  formatViewerCount,
  parseKickChannelPayload,
} from "./kickStatus";

describe("parseKickChannelPayload", () => {
  it("parses a live livestream payload with viewers and title", () => {
    const result = parseKickChannelPayload({
      livestream: {
        is_live: true,
        viewer_count: 1482,
        session_title: "Previa River Plate en vivo",
      },
    });

    expect(result).toEqual({
      state: "live",
      viewers: 1482,
      title: "Previa River Plate en vivo",
    });
  });

  it("parses an offline payload when livestream is null or is_live is false", () => {
    expect(parseKickChannelPayload({ livestream: null })).toEqual({
      state: "offline",
      viewers: null,
      title: null,
    });

    expect(
      parseKickChannelPayload({ livestream: { is_live: false, viewer_count: 0 } }),
    ).toEqual({
      state: "offline",
      viewers: null,
      title: null,
    });
  });

  it("returns unknown for malformed payloads", () => {
    expect(parseKickChannelPayload(null)).toEqual({
      state: "unknown",
      viewers: null,
      title: null,
    });
    expect(parseKickChannelPayload({})).toEqual({
      state: "unknown",
      viewers: null,
      title: null,
    });
  });
});

describe("fetchKickLiveStatus", () => {
  it("returns live status when API responds 200 with livestream", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        livestream: { is_live: true, viewer_count: 840, session_title: "Post partido" },
      }),
    });

    const result = await fetchKickLiveStatus("spidercarp23", {
      fetcher: fetcher as unknown as typeof fetch,
    });

    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      state: "live",
      viewers: 840,
      title: "Post partido",
    });
  });

  it("returns unknown silently on non-OK HTTP responses like Cloudflare 403", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({}),
    });

    const result = await fetchKickLiveStatus("spidercarp23", {
      fetcher: fetcher as unknown as typeof fetch,
    });

    expect(result.state).toBe("unknown");
  });

  it("returns unknown silently on network or CORS rejection", async () => {
    const fetcher = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));

    const result = await fetchKickLiveStatus("spidercarp23", {
      fetcher: fetcher as unknown as typeof fetch,
    });

    expect(result.state).toBe("unknown");
  });

  it("aborts and returns unknown on timeout", async () => {
    const fetcher = vi.fn(
      (_url: string, init?: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () => {
            reject(new DOMException("Aborted", "AbortError"));
          });
        }),
    );

    const result = await fetchKickLiveStatus("spidercarp23", {
      timeoutMs: 20,
      fetcher: fetcher as unknown as typeof fetch,
    });

    expect(result.state).toBe("unknown");
  });

  it("formats viewer counts with es-AR locale", () => {
    expect(formatViewerCount(1250)).toMatch(/1[.,]250/);
  });
});
