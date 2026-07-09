import { test, expect } from "./fixtures";
import { TurboHeaderPage } from "../pages/TurboHeaderPage";

test.describe("@smoke @regression @turbo @language Turbo.az dil dəyişimi", () => {
  test("@positive AZ dilindən RU dilinə keçid işləməlidir", async ({ page }) => {
    const turboHeaderPage = new TurboHeaderPage(page);

    await turboHeaderPage.open();
    await turboHeaderPage.headerLink("RU").click();

    await expect(page).toHaveURL(/^https:\/\/ru\.turbo\.az\/(?:#.*)?$/);
    await expect(turboHeaderPage.headerLink("AZ")).toBeVisible();
  });

  test("@positive RU dilindən AZ dilinə keçid işləməlidir", async ({ page }) => {
    const turboHeaderPage = new TurboHeaderPage(page);

    await turboHeaderPage.openRu();
    await turboHeaderPage.headerLink("AZ").click();

    await expect(page).toHaveURL(/^https:\/\/turbo\.az\/(?:#.*)?$/);
    await expect(turboHeaderPage.headerLink("RU")).toBeVisible();
  });
});
