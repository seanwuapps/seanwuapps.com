import { newE2EPage } from "@stencil/core/testing";

describe("fade-in", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fade-in></fade-in>");

    const element = await page.find("fade-in");
    expect(element).toHaveClass("hydrated");
  });
});
