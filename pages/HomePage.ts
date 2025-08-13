import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://bearstore-testsite.smartbear.com/');
  }

  async selectBasketballCategory() {
    await this.page.getByRole('link', { name: 'Picture for category Basketball' }).click();
  }
}