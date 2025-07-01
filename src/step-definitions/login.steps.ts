import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

// Login exitoso e inválido
Given('que el usuario esta en la pagina de login', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('ingresa el usuario {string} y la contrasenia {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);
});

Then('debería ver la pagina de productos', async function (this: CustomWorld) {
  expect(await this.page.url()).to.include('inventory.html');
});

Then('deberia ver un mensaje de error de login', async function (this: CustomWorld) {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg).to.not.be.null;
  expect(errorMsg!.toLowerCase()).to.include('epic sadface');
});
