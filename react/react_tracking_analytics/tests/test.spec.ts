import { test, expect } from "@playwright/test";

test.describe("test home page", () => {
  // go to localhost before running any tests
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("has hello world", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(
      page.getByRole("heading", {
        name: "Hello World",
        exact: false,
      })
    ).toBeVisible();
  });

  test("has button", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(
      page.getByRole("button", {
        name: "Button",
        exact: false,
      })
    ).toBeVisible();
  });
});
