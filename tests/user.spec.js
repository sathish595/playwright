import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://main.d32f5zekt5cgad.amplifyapp.com/auth/login');
  await page.getByPlaceholder('Please enter your phone number').click();
  await page.getByPlaceholder('Please enter your phone number').fill('6383182134');
  await page.locator('.numbers-input-container').click();
  await page.locator('.inputBox').first().click();
  await page.locator('.inputBox').first().fill('111111');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('.button-stroke-container').first().click();
  await page.getByRole('img', { name: 'Get Current Location' }).click();
  await page.getByText('17.6 km').click();
  await page.getByText('SmallMost Suitable for:Envelope,Books,Magazins,etcDimension: 35 cm (L) x 40 cm (').first().click();
  await page.locator('div').filter({ hasText: /^5 minutes$/ }).nth(1).click();
  await page.getByRole('option', { name: '1 hour', exact: true }).locator('div').nth(2).click();
  await page.getByText('CHECK AVAILABILITY').first().click();
  await page.locator('div').filter({ hasText: /^PROCEED$/ }).first().click();
  await page.locator('div').filter({ hasText: /^SAVE & CONTINUE$/ }).first().click();
  await page.locator('div').filter({ hasText: /^My Profile$/ }).nth(1).click();
  await page.locator('.toggle-header-text').first().click();
  await page.locator('.toggle-right-container > .toggle-header-text').first().click();
  await page.locator('div:nth-child(2) > .notification-type-header-container > .notification-header-right-container > .profile-toggle-parent-container > .toggle-right-container').click();
  await page.locator('div:nth-child(3) > .notification-type-header-container > .notification-header-right-container > .profile-toggle-parent-container').click();
});
