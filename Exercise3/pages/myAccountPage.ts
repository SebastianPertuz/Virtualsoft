import { Page } from "playwright";

export class MyAccountPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
