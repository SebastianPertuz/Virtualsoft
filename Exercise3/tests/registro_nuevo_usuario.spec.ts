//Pagina a testear - https://magento.softwaretestingboard.com/

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";

test("Registro de nuevo usuario", async ({ page }) => {
  //Indico la ruta de la pagina
  const homePage = new HomePage(page);
  await homePage.goto();

  //Valido si es la pagina correcta
  await expect(page).toHaveTitle("Home Page");

  //Valido si la opcion para crear una nueva cuenta es visible y luego doy click
  const createAnAccountPage = await homePage.visitCreateAnAccountPage();

  //Valido si es la pagina correcta
  await expect(page).toHaveTitle("Create New Customer Account");

  // Lleno el formulario
  await createAnAccountPage.fillForm();

  //Click en el boton Sign Up
  await createAnAccountPage.submitForm();

  //Valido si es la pagina correcta
  await expect(page).toHaveTitle("My Account");
});
