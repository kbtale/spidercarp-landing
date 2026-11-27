import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button.svelte";

describe("Button", () => {
  it("renders a safe external link when href and target=_blank are set", () => {
    render(Button, {
      props: {
        text: "Ver en Vivo",
        href: "https://kick.com/spidercarp23",
        target: "_blank",
      },
    });

    const link = screen.getByRole("link", { name: "Ver en Vivo" });
    expect(link).toHaveAttribute("href", "https://kick.com/spidercarp23");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a button and fires onclick handler", async () => {
    const user = userEvent.setup();
    const onclick = vi.fn();

    render(Button, {
      props: {
        text: "Cronograma",
        variant: "ghost",
        onclick,
      },
    });

    const button = screen.getByRole("button", { name: "Cronograma" });
    await user.click(button);
    expect(onclick).toHaveBeenCalledTimes(1);
  });
});
