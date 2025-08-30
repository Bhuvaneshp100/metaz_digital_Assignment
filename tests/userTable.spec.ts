// import { test, expect } from '@playwright/test';
// import method from '../method/common';
// import { testData } from '../test-data/userTestData';

// // function generateUniqueUsername(base: string) {
// //   const timestamp = Date.now(); // unique number each run
// //   return `${base}${timestamp}`;
// // }
// test.describe('Login Page Tests', () => {

//   test('Successful Login with Valid Credentials', async ({ page }) => {
//     await method.login(page);
//     await page.pause();
//     await expect(page).toHaveURL(/dashboard/);
//     await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
//     await expect(page.locator('.oxd-layout-context')).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
//     await expect(page.getByRole('textbox', { name: 'Search' })).toBeEmpty();
//     await page.screenshot({ path: 'screenshots/login_success.png', fullPage: true });
//   });

//   // test('Login with Different User Roles', async ({ page }) => {
//   //   await method.login(page, 'admin_user', 'admin_password');
//   //   await expect(page).toHaveURL(/dashboard/);
//   //   await expect(page.locator('.admin-features')).toBeVisible();
//   // });

//   // test('Login with Remember Me Enabled', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill(process.env.USER_NAME!);
//   //   await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD!);
//   //   await page.locator('input[name="rememberMe"]').check();
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page).toHaveURL(/dashboard/);
//   // });

//   // test('Login After Previous Failed Attempts', async ({ page }) => {
//   //   // Failed attempt
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill('wrong_user');
//   //   await page.locator('input[name="password"]').fill('wrong_pass');
//   //   await page.locator('button[type="submit"]').click();
//   //   await expect(page.locator('.error-message')).toBeVisible();

//   //   // Successful login
//   //   await method.login(page);
//   //   await expect(page).toHaveURL(/dashboard/);
//   // });

//   // test('Login with Case-Insensitive Username', async ({ page }) => {
//   //   const username = process.env.USER_NAME!;

//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill(username.toUpperCase());
//   //   await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD!);
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page).toHaveURL(/dashboard/);
//   // });

//   // // Negative Test Cases
//   // test('Login with Invalid Username', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill('nonexistent_user');
//   //   await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD!);
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with Invalid Password', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill(process.env.USER_NAME!);
//   //   await page.locator('input[name="password"]').fill('wrong_password');
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with Empty Username', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill('');
//   //   await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD!);
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.username-error')).toHaveText('Username is required');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with Empty Password', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill(process.env.USER_NAME!);
//   //   await page.locator('input[name="password"]').fill('');
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.password-error')).toHaveText('Password is required');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with Both Fields Empty', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill('');
//   //   await page.locator('input[name="password"]').fill('');
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.username-error')).toHaveText('Username is required');
//   //   await expect(page.locator('.password-error')).toHaveText('Password is required');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with SQL Injection Attempt', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill("admin' OR '1'='1");
//   //   await page.locator('input[name="password"]').fill("' OR '1'='1");
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Login with XSS Attempt', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill('<script>alert("xss")</script>');
//   //   await page.locator('input[name="password"]').fill('password');
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // test('Multiple Failed Login Attempts - Account Lockout', async ({ page }) => {
//   //   for (let i = 0; i < 5; i++) {
//   //     await page.goto('/');
//   //     await page.locator('input[name="username"]').fill(process.env.USER_NAME!);
//   //     await page.locator('input[name="password"]').fill(`wrong_pass_${i}`);
//   //     await page.locator('button[type="submit"]').click();

//   //     if (i < 4) {
//   //       await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //     } else {
//   //       await expect(page.locator('.error-message')).toHaveText('Account locked. Please try again later.');
//   //     }
//   //   }
//   // });

//   // test('Login with Very Long Credentials', async ({ page }) => {
//   //   const longString = 'a'.repeat(1000);

//   //   await page.goto('/');
//   //   await page.locator('input[name="username"]').fill(longString);
//   //   await page.locator('input[name="password"]').fill(longString);
//   //   await page.locator('button[type="submit"]').click();

//   //   await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
//   //   await expect(page).toHaveURL(/login/);
//   // });

//   // // Security Test Cases
//   // test('Password Field Should Mask Input', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('input[name="password"]').fill('mysecretpassword');

//   //   const inputType = await page.locator('input[name="password"]').getAttribute('type');
//   //   expect(inputType).toBe('password');
//   // });

//   // test('Login Page Should Use HTTPS', async ({ page }) => {
//   //   await page.goto('/');
//   //   const url = page.url();
//   //   expect(url).toMatch(/^https:/);
//   // });

//   // test('No Credentials in URL After Login', async ({ page }) => {
//   //   await method.login(page);
//   //   const url = page.url();
//   //   expect(url).not.toContain('username');
//   //   expect(url).not.toContain('password');
//   //   expect(url).not.toContain(process.env.USER_NAME!);
//   //   expect(url).not.toContain(process.env.USER_PASSWORD!);
//   // });

//   // test('Verify Login Page Title and Headings', async ({ page }) => {
//   //   await page.goto('/');
//   //   await expect(page).toHaveTitle('Login');
//   //   await expect(page.locator('h1')).toHaveText('Sign In');
//   // });

//   // test('Verify Forgot Password Link', async ({ page }) => {
//   //   await page.goto('/');
//   //   await page.locator('a:has-text("Forgot Password")').click();
//   //   await expect(page).toHaveURL(/forgot-password/);
//   // });
// });

