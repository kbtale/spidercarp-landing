import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import SocialLinks from "./SocialLinks.svelte";
import { SOCIAL_LINKS } from "../data/site";

describe("SocialLinks", () => {
  it("renders all five social links with safe external attributes", () => {
    render(SocialLinks);

    for (const social of SOCIAL_LINKS) {
      const link = screen.getByRole("link", { name: social.ariaLabel });
      expect(link).toHaveAttribute("href", social.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
