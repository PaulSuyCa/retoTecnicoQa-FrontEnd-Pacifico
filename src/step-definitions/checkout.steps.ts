import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { CheckoutPage } from '../pages/CheckoutPage';

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
  await this.checkoutPage.assertCheckout(confirmMsg, confirmation);
});
