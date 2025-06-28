import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

// Login exitoso e inválido
Given('que el usuario está en la página de login', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);
});

Then('debería ver la página de productos', async function (this: CustomWorld) {
  expect(await this.page.url()).to.include('inventory.html');
});

Then('debería ver un mensaje de error de login', async function (this: CustomWorld) {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg).to.not.be.null;
  expect(errorMsg!.toLowerCase()).to.include('epic sadface');
});

// Agregar producto al carrito
Given('que el usuario ha iniciado sesión correctamente', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  this.inventoryPage = new InventoryPage(this.page);
});

When('agrega el producto {string} al carrito', async function (this: CustomWorld, productId: string) {
  await this.inventoryPage.addProductToCart(productId);
});

Then('el contador del carrito debería mostrar {string}', async function (this: CustomWorld, count: string) {
  const cartCount = await this.inventoryPage.getCartCount();
  expect(cartCount.toString()).to.equal(count);
});

// Ver productos en el carrito
Given('que el usuario ha iniciado sesión y ha agregado {string} al carrito', async function (this: CustomWorld, productId: string) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addProductToCart(productId);
});

When('ingresa al carrito de compras', async function (this: CustomWorld) {
  await this.inventoryPage.openCart();
  this.cartPage = new CartPage(this.page);
});

Then('debería ver el producto {string} en el carrito', async function (this: CustomWorld, productName: string) {
  const productNames = await this.cartPage.getProductNames();
  expect(productNames).to.include(productName);
});

// Completar proceso de compra
When('completa el proceso de compra con los datos {string}, {string} y código postal {string}',
  async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
    await this.cartPage.proceedToCheckout();
    this.checkoutPage = new CheckoutPage(this.page);
    await this.checkoutPage.fillInformation(firstName, lastName, postalCode);
    await this.checkoutPage.finishOrder();
});

Then('debería ver el mensaje de confirmación {string}', async function (this: CustomWorld, confirmation: string) {
  const confirmMsg = await this.checkoutPage.getConfirmation();
  expect(confirmMsg).to.equal(confirmation);
});
