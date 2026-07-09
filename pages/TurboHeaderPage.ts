import { Locator, Page } from "@playwright/test";

export class TurboHeaderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://turbo.az/");
  }

  async openRu() {
    await this.page.goto("https://ru.turbo.az/");
  }

  headerLink(name: string | RegExp): Locator {
    return this.page
      .getByRole("link", {
        name,
        exact: typeof name === "string",
      })
      .first();
  }
}
