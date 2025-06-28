import { Page } from 'playwright';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('input[data-test="firstName"]', firstName);
    await this.page.fill('input[data-test="lastName"]', lastName);
    await this.page.fill('input[data-test="postalCode"]', postalCode);
    await this.page.click('input[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('button[data-test="finish"]');
  }

  async getConfirmation(): Promise<string | null> {
    return this.page.textContent('.complete-header');
  }
}
