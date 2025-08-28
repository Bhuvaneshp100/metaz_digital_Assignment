// // tests/admin-mock.spec.ts
// import { test, expect } from '@playwright/test';
// import  method  from '../method/common';
// import { mockUsersData } from '../test-data/mockData';



// test('Simple mock test for OrangeHRM Admin', async ({ page }) => {
//   await page.route('**/api/v2/admin/users**', async (route) => {
//     console.log('Intercepting users API...');
//     const mockData = {body: JSON.stringify(mockUsersData)};
//     await route.fulfill({
//       status: 200,
//       contentType: 'application/json',
//       body: JSON.stringify(mockData)
//     });
//   });
//   await method.login(page);

//   await page.click('a[href="/web/index.php/admin/viewAdminModule"]');
//   await page.waitForURL('**/admin/viewSystemUsers**');

//   await page.waitForSelector('.oxd-table-body', { timeout: 15000 });

//   const pageContent = await page.textContent('body');
//   console.log('Page contains Test User:', pageContent?.includes('Test User'));

//   await expect(page.locator('text=Test User').first()).toBeVisible({ timeout: 10000 });
// });












// // test('Simple mock test for OrangeHRM Admin', async ({ page }) => {
// //   await page.route('**/api/v2/admin/users*', async (route) => {
// //     await route.fulfill({
// //       status: 200,
// //       contentType: 'application/json',
// //       body: JSON.stringify(mockUsersData)
// //     });
// //   });

// //   await method.login(page);
// //   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
// //   await expect(page.getByText('Test User')).toBeVisible();
// //   await expect(page.getByText('testuser')).toBeVisible();
// //   await expect(page.getByText('Admin')).toBeVisible();
// //   await expect(page.locator('.orangehrm-horizontal-padding')).toContainText('(1) Record Found');
// // });