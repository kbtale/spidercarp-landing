export type KickStreamState = "live" | "offline" | "unknown";

export interface KickLiveStatus {
  state: KickStreamState;
  viewers: number | null;
  title: string | null;
}

export interface FetchKickOptions {
  timeoutMs?: number;
  fetcher?: typeof fetch;
}

const UNKNOWN_STATUS: KickLiveStatus = {
  state: "unknown",
  viewers: null,
  title: null,
};

export function parseKickChannelPayload(payload: unknown): KickLiveStatus {
  if (!payload || typeof payload !== "object") {
    return UNKNOWN_STATUS;
  }

  const record = payload as Record<string, unknown>;
  if (!("livestream" in record)) {
    return UNKNOWN_STATUS;
  }

  const livestream = record.livestream;
  if (livestream === null) {
    return {
      state: "offline",
      viewers: null,
      title: null,
    };
  }

  if (typeof livestream !== "object") {
    return UNKNOWN_STATUS;
  }

  const stream = livestream as Record<string, unknown>;
  if (stream.is_live === false) {
    return {
      state: "offline",
      viewers: null,
      title: null,
    };
  }

  const viewers =
    typeof stream.viewer_count === "number" && Number.isFinite(stream.viewer_count)
      ? Math.max(0, Math.floor(stream.viewer_count))
      : null;

  const title =
    typeof stream.session_title === "string" && stream.session_title.trim().length > 0
      ? stream.session_title.trim()
      : null;

  return {
    state: "live",
    viewers,
    title,
  };
}

export async function fetchKickLiveStatus(
  channel = "spidercarp23",
  options: FetchKickOptions = {},
): Promise<KickLiveStatus> {
  const fetcher = options.fetcher ?? (typeof fetch === "function" ? fetch : null);
  if (!fetcher) {
    return UNKNOWN_STATUS;
  }

  const timeoutMs = options.timeoutMs ?? 4000;
  const controller =
    typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = controller
    ? setTimeout(() => {
        controller.abort();
      }, timeoutMs)
    : null;

  try {
    const response = await fetcher(
      `https://kick.com/api/v2/channels/${encodeURIComponent(channel)}`,
      {
        method: "GET",
        cache: "no-store",
        headers: { Accept: "application/json" },
        signal: controller?.signal,
      },
    );

    if (!response.ok) {
      return UNKNOWN_STATUS;
    }

    const data: unknown = await response.json();
    return parseKickChannelPayload(data);
  } catch {
    return UNKNOWN_STATUS;
  } finally {
    if (timer) {
      clearTimeout(timer);
    }
  }
}

export function formatViewerCount(viewers: number): string {
  return new Intl.NumberFormat("es-AR").format(viewers);
}
