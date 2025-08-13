import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async selectAllCourtBasketball() {
    await this.page.getByRole('link', { name: 'Picture of All-Court' }).click();
  }

  async addToCart(times = 3) {
    for (let i = 0; i < times; i++) {
      await this.page.getByRole('link', { name: ' Add to cart' }).click();
    }
  }

  async checkout() {
    await this.page.getByRole('link', { name: ' Checkout' }).click();
  }
}