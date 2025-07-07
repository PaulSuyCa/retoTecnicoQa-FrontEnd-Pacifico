import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

Given('que el usuario está en la página de login', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);
});

Then('debería ver la página de productos', async function (this: CustomWorld) {
  const url = await this.page.url();
  await this.loginPage.assertOnInventoryPage(url);
});

Then('debería ver un mensaje de error de login', async function (this: CustomWorld) {
  const errorMsg = await this.loginPage.getErrorMessage();
  await this.loginPage.assertLoginErrorMessage(errorMsg);
});

Given('que el usuario ha iniciado sesión correctamente', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  const url = await this.page.url();
  await this.loginPage.assertOnInventoryPage(url);
});
