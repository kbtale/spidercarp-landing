import { describe, expect, it } from "vitest";
import {
  COLLABORATIONS,
  EXTERNAL_LINKS,
  HERO_WORDS,
  NAV_ITEMS,
  SOCIAL_LINKS,
  STREAM_SCHEDULE,
  TIKTOK_VIDEOS,
} from "./site";

describe("site data", () => {
  it("exposes navigation items without a twitter section", () => {
    const ids = NAV_ITEMS.map((item) => item.id);
    expect(ids).toEqual([
      "inicio",
      "streams",
      "tiktok",
      "colaboraciones",
      "comunidad",
    ]);
    expect(ids).not.toContain("twitter");
  });

  it("keeps compact X social link alongside all core platforms", () => {
    const ids = SOCIAL_LINKS.map((link) => link.id);
    expect(ids).toEqual(["kick", "x", "instagram", "tiktok", "youtube"]);
    for (const link of SOCIAL_LINKS) {
      expect(link.href).toMatch(/^https:\/\//);
      expect(link.ariaLabel.length).toBeGreaterThan(3);
    }
  });

  it("defines tiktok videos, collaborations, hero words, and schedule slots", () => {
    expect(TIKTOK_VIDEOS).toHaveLength(3);
    expect(COLLABORATIONS).toHaveLength(3);
    expect(HERO_WORDS.length).toBeGreaterThanOrEqual(4);
    expect(STREAM_SCHEDULE.length).toBeGreaterThanOrEqual(3);
    expect(EXTERNAL_LINKS.kickChannel).toContain("kick.com/spidercarp23");
  });
});
