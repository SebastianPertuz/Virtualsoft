//Pagina a testear - https://magento.softwaretestingboard.com/

import { test, expect } from '@playwright/test';

function getRandomEmail(){
    const number = Math.floor(Math.random() * 100);        
    return "TestEmail+" + number + "@gmail.com";
}

function getRandomPassword(){
    const pass = Math.random().toString(36).slice(2);
    return '!Auto' + pass;
}

test('Registro de nuevo usuario', async ({ page }) => {
    //Indico la ruta de la pagina
    await page.goto('https://magento.softwaretestingboard.com/')

    //Valido si es la pagina correcta
    await expect(page).toHaveTitle('Home Page');

    //Valido si la opcion para crear una nueva cuenta es visible y luego doy click
    await page.getByText('Create an Account').first().click();

    //Valido si es la pagina correcta
    await expect(page).toHaveTitle('Create New Customer Account');

    //Lleno el campo 'First Name'
    await page.getByLabel('First Name').fill('TestName');

    //Lleno el campo 'Last Name'
    await page.getByLabel('Last Name').fill('TestLastName');

    //Lleno el campo 'Email'
    await page.getByLabel('Email').fill(getRandomEmail());

    //Lleno el campo 'Password'
    const password = getRandomPassword();
    await page.getByLabel('Password').first().fill(password);
    //await expect(page.locator('#password-strength-meter :text("Strong")'));

    //Lleno el campo 'Confirm password'
    await page.getByLabel('Confirm Password').last().fill(password);

    //Click en el boton Sign Up
    await page.getByRole('button', {name: 'Create an Account'}).click();

    //Valido si es la pagina correcta
    await expect(page).toHaveTitle('My Account');
})