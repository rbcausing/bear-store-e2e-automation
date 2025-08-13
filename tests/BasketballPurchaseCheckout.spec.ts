import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Basketball purchase checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.goto();
  await homePage.selectBasketballCategory();

  await productPage.selectAllCourtBasketball();
  await productPage.addToCart(3);
  await productPage.checkout();

  await checkoutPage.checkoutAsGuest();
  await checkoutPage.fillPersonalInfo('QA', 'Tester', 'QA@tester.com');
  await checkoutPage.fillShippingInfo('QA', 'Tester', 'QA@Tester.com');
  await checkoutPage.continueToPayment();
  await checkoutPage.selectCashOnDelivery();
  await checkoutPage.agreeTermsAndConfirm();
  await checkoutPage.verifyOrderPlaced();
});