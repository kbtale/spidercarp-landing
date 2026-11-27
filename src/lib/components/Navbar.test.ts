import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar.svelte";
import { NAV_ITEMS } from "../data/site";

describe("Navbar mobile drawer", () => {
  it("opens the @ui-sdk Drawer, lists all nav sections, and closes on Escape", async () => {
    const user = userEvent.setup();
    render(Navbar);

    const trigger = screen.getByRole("button", {
      name: /abrir menú de navegación/i,
    });
    await user.click(trigger);

    const drawer = await screen.findByRole("dialog", { name: /spidercarp/i });
    expect(drawer).toBeInTheDocument();

    for (const item of NAV_ITEMS) {
      const links = screen.getAllByRole("link", { name: item.label });
      expect(links.length).toBeGreaterThanOrEqual(2);
    }

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: /spidercarp/i }),
      ).not.toBeInTheDocument();
    });
  });
});
