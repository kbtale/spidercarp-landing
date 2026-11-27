import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Colabs from "./Colabs.svelte";

describe("Colabs Micho Dialog", () => {
  it("opens the Micho dialog and closes with Escape", async () => {
    const user = userEvent.setup();
    render(Colabs);

    const trigger = screen.getByRole("button", {
      name: /abrir modal de disculpa de micho/i,
    });
    await user.click(trigger);

    const dialog = await screen.findByRole("dialog", {
      name: /pídanle perdón al micho/i,
    });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText(/- BocaEnLaCopa/i)).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: /pídanle perdón al micho/i }),
      ).not.toBeInTheDocument();
    });
  });

  it("closes when clicking either action button", async () => {
    const user = userEvent.setup();
    render(Colabs);

    const trigger = screen.getByRole("button", {
      name: /abrir modal de disculpa de micho/i,
    });
    await user.click(trigger);
    await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /perdón, micho/i }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    await user.click(trigger);
    await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /^no$/i }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
