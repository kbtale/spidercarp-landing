import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Clips from "./Clips.svelte";

describe("Clips lazy video playback", () => {
  it("does not mount the 24 MB video element until the user clicks play", async () => {
    const user = userEvent.setup();
    const { container } = render(Clips);

    expect(container.querySelector("video")).toBeNull();

    const playButton = screen.getByRole("button", {
      name: /reproducir clip destacado de juanfer/i,
    });
    await user.click(playButton);

    const video = container.querySelector("video");
    expect(video).not.toBeNull();
  });
});
