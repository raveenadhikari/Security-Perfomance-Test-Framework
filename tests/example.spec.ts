import { test, expect } from '@playwright/test';

test('basic login flow', async ({ page }) => {
  // 1. Go to the application
  await page.goto('http://localhost:3000');

  // 2. Handle initial pop-ups if they appear
  await page.locator('button[aria-label="dismiss cookie message"]').click({ timeout: 3000 }).catch(() => {});
  await page.locator('button[aria-label="Close Welcome Banner"]').click({ timeout: 3000 }).catch(() => {});

  // 3. Navigate to the login page
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('menuitem', { name: 'Login' }).click();

  // Handle cookie banner again in case it reappears
  await page.locator('button[aria-label="dismiss cookie message"]').click({ timeout: 3000 }).catch(() => {});

  // 4. Fill in the login credentials
  await page.locator('#email').fill('admin@juice-sh.op');
  await page.locator('#password').fill('admin123');

  // 5. Submit the login form
  await page.locator('#loginButton').click();

  // 6. VERIFY SUCCESSFUL LOGIN - NEW STRATEGY
  // The most reliable way to confirm a login is to see if a "Logout" button is now available.
  // First, we must re-open the "Account" menu to see its contents.
  await page.getByRole('button', { name: 'Account' }).click();

  // Now, we assert that a "Logout" menu item is visible inside it.
  // This is a very strong and reliable indicator of a successful session.
  const logoutButton = page.getByRole('menuitem', { name: 'Logout' });
  await expect(logoutButton).toBeVisible();
});