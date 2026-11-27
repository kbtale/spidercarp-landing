import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Hero from "./Hero.svelte";
import { STREAM_SCHEDULE } from "../data/site";

describe("Hero and ScheduleDialog", () => {
  it("opens the Cronograma dialog on click and closes on Escape", async () => {
    const user = userEvent.setup();
    render(Hero);

    const trigger = screen.getByRole("button", { name: /cronograma/i });
    await user.click(trigger);

    const dialog = await screen.findByRole("dialog", {
      name: /cronograma de streams/i,
    });
    expect(dialog).toBeInTheDocument();

    for (const slot of STREAM_SCHEDULE) {
      expect(screen.getByText(slot.title)).toBeInTheDocument();
    }

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: /cronograma de streams/i }),
      ).not.toBeInTheDocument();
    });
  });

  it("closes the Cronograma dialog via the Entendido button", async () => {
    const user = userEvent.setup();
    render(Hero);

    await user.click(screen.getByRole("button", { name: /cronograma/i }));
    await screen.findByRole("dialog", { name: /cronograma de streams/i });

    await user.click(screen.getByRole("button", { name: /entendido/i }));

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: /cronograma de streams/i }),
      ).not.toBeInTheDocument();
    });
  });
});
