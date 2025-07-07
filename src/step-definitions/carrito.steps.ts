import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

// Agregar producto al carrito
When('agrega el producto {string} al carrito', async function (this: CustomWorld, productId: string) {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addProductToCart(productId);
  await this.inventoryPage.openCart();
  this.cartPage = new CartPage(this.page);
});

Then('el contador del carrito debería mostrar {string}', async function (this: CustomWorld, count: string) {
  const cartCount = await this.inventoryPage.getCartCount();
  expect(cartCount.toString()).to.equal(count);
  this.cartPage = new CartPage(this.page);
  await this.cartPage.assertCountProduct(count);
});

// Ver productos en el carrito
When('ingresa al carrito de compras', async function (this: CustomWorld) {
  await this.inventoryPage.openCart();
  this.cartPage = new CartPage(this.page);
});

Then('debería ver el producto {string} en el carrito', async function (this: CustomWorld, productName: string) {
  const productNames = await this.cartPage.getProductNames();
  await this.cartPage.assertProduct(productNames, productName);
});
