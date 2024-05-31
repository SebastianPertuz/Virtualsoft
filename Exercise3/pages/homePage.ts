import { Locator, Page } from "playwright";
import { CreateAnAccountPage } from "./createAnAccountPage";

export class HomePage {
  readonly page: Page;
  readonly createAnAccount: Locator;
  constructor(page) {
    this.page = page;
    this.createAnAccount = page
      .locator(".header")
      .getByRole("link", { name: "Create an Account" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async visitCreateAnAccountPage() {
    await this.createAnAccount.click();
    return new CreateAnAccountPage(this.page);
  }
}
