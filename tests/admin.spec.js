import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://main.d2ttzm747hgxrf.amplifyapp.com/auth/login');
  await page.getByPlaceholder('Please enter your username').click();
  await page.getByPlaceholder('Please enter your username').fill('sk12');
  await page.getByPlaceholder('Please enter your password').click();
  await page.getByPlaceholder('Please enter your password').fill('123456');
  await page.locator('div').filter({ hasText: /^LOGIN$/ }).first().click();
});