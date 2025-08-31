import { test, expect } from '@playwright/test';
import method from '../method/common';
import { mockUsers } from '../test-data/mockUsers';

test('Mock Users API after login', async ({ page }) => {
  await method.setupUsersMock(page);
  await page.goto('/')
  await method.login(page);
  
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page).toHaveURL(/.*admin\/viewSystemUsers/);
  await expect(page.locator('.oxd-table-loader')).toBeHidden({ timeout: 10000 });
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
  await expect(tableBody.locator('.oxd-table-card')).toHaveCount(mockUsers.length);

  for (const user of mockUsers) {
    await expect(tableBody).toContainText(user.username);
    await expect(tableBody).toContainText(user.userRole);
    await expect(tableBody).toContainText(user.employeeName);
    await expect(tableBody).toContainText(user.status);
  }
});