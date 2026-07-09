import { test, expect } from "./fixtures";
import { TurboHeaderPage } from "../pages/TurboHeaderPage";

const headerLinks = [
  {
    name: "Tap.az",
    expectedHref: /https:\/\/tap\.az\/\?utm_source=turboaz/,
  },
  {
    name: "Bina.az",
    expectedHref: /https:\/\/bina\.az\/\?utm_source=turboaz/,
  },
  {
    name: "Boss.az",
    expectedHref: /https:\/\/boss\.az\/\?utm_source=turboaz/,
  },
  {
    name: "Yardım",
    expectedHref: "/help/popular_questions",
  },
  {
    name: "RU",
    expectedHref: "https://ru.turbo.az/",
  },
  {
    name: "Seçilmişlər",
    expectedHref: "/bookmarks",
  },
  {
    name: "Bütün elanlar",
    expectedHref: "/autos",
  },
  {
    name: "Dilerlər",
    expectedHref: "/avtosalonlar",
  },
  {
    name: /Sifarişlə/,
    expectedHref: "/autos?q%5Bavailability_status%5D=order",
  },
  {
    name: "Avtokataloq",
    expectedHref: "/autocatalog",
  },
  {
    name: "Moto",
    expectedHref: "/motosiklet",
  },
  {
    name: "Yeni elan",
    expectedHref: "/autos/new",
  },
] as const;

const mainNavigationLinks = [
  {
    title: "Bütün elanlar",
    name: "Bütün elanlar",
    expectedUrl: /\/autos$/,
  },
  {
    title: "Dilerlər",
    name: "Dilerlər",
    expectedUrl: /\/avtosalonlar$/,
  },
  {
    title: "Sifarişlə",
    name: /Sifarişlə/,
    expectedUrl: /\/autos\?q%5Bavailability_status%5D=order$/,
  },
  {
    title: "Avtokataloq",
    name: "Avtokataloq",
    expectedUrl: /\/autocatalog$/,
  },
  {
    title: "Moto",
    name: "Moto",
    expectedUrl: /\/motosiklet$/,
  },
  {
    title: "Yeni elan",
    name: "Yeni elan",
    expectedUrl: /\/autos\/new$/,
  },
] as const;

test.describe("@smoke @regression @turbo @header @navigation Turbo.az header keçidləri", () => {
  test("@positive header keçidləri görünməli və doğru URL-ə sahib olmalıdır", async ({ page }) => {
    const turboHeaderPage = new TurboHeaderPage(page);

    await turboHeaderPage.open();

    for (const link of headerLinks) {
      const headerLink = turboHeaderPage.headerLink(link.name);

      await expect(headerLink).toBeVisible();
      await expect(headerLink).toHaveAttribute("href", link.expectedHref);
    }
  });

  for (const link of mainNavigationLinks) {
    test(`@positive ${link.title} keçidi doğru bölməyə aparmalıdır`, async ({ page }) => {
      const turboHeaderPage = new TurboHeaderPage(page);

      await turboHeaderPage.open();
      await turboHeaderPage.headerLink(link.name).click();

      await expect(page).toHaveURL(link.expectedUrl);
    });
  }
});
