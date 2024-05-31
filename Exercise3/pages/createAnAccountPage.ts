import { faker } from "@faker-js/faker";
import { Locator, Page } from "playwright";
import { MyAccountPage } from "./myAccountPage";

export class CreateAnAccountPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly submit: Locator;
  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByLabel("First Name");
    this.lastName = page.getByLabel("Last Name");
    this.email = page.getByLabel("Email");
    this.password = page.locator("#password");
    this.confirmPassword = page.locator("#password-confirmation");
    this.submit = page.getByRole("button", { name: "Create an Account" });
  }

  async goto() {
    await this.page.goto("/create-an-account");
  }

  async fillForm() {
    //Lleno el campo 'First Name'
    await this.firstName.fill(faker.person.firstName());

    //Lleno el campo 'Last Name'
    await this.lastName.fill(faker.person.lastName());

    //Lleno el campo 'Email'
    await this.email.fill(faker.internet.email());

    //Lleno el campo 'Password'
    const password = faker.internet.password();
    await this.password.fill(password);

    //Lleno el campo 'Confirm password'
    await this.confirmPassword.fill(password);
  }

  async submitForm() {
    await this.submit.click();
    return new MyAccountPage(this.page);
  }
}
