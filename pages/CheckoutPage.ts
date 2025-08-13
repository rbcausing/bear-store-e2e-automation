import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async checkoutAsGuest() {
    await this.page.getByRole('link', { name: 'Checkout as Guest ' }).click();
  }

  async fillPersonalInfo(firstName: string, lastName: string, email: string) {
    await this.page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Email *' }).fill(email);
    await this.page.getByRole('button', { name: 'Next ' }).click();
  }

  async fillShippingInfo(firstName: string, lastName: string, email: string) {
    await this.page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Email *' }).fill(email);
    await this.page.getByRole('button', { name: 'Next ' }).click();
  }

  async continueToPayment() {
    await this.page.getByRole('button', { name: 'Next ' }).click();
  }

  async selectCashOnDelivery() {
    await this.page.getByRole('radio', { name: 'Cash on delivery' }).check();
    await this.page.getByRole('button', { name: 'Next ' }).click();
  }

  async agreeTermsAndConfirm() {
    await this.page.getByRole('checkbox', { name: 'I agree with the terms of' }).check();
    await this.page.getByRole('button', { name: 'Confirm ' }).click();
  }

  async verifyOrderPlaced() {
    await this.page.getByText('Your order number:').waitFor();
  }
}