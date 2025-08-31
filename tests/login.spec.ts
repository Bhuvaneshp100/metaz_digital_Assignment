import { test } from '@playwright/test';
import method from '../method/common';
import Login from '../method/login';
import { login } from '../test-data/login';

// SMOKE TESTS
test.describe('Login Smoke Tests @smoke', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Successful Login with Valid Credentials @smoke', async ({ page }) => {
    await method.login(page);
    await Login.validateSuccessfulLogin(page);
  });
});

// REGRESSION TESTS
test.describe('Login Regression Tests @regression', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Login page UI Elements Validation @regression', async ({ page }) => {
    await Login.validateLoginPageUI(page);
  });

  test('Login with Invalid Username @regression', async ({ page }) => {
    await method.login(page, login.Invaldiusername, process.env.USER_PASSWORD!);
    await Login.validateLoginError(page);
  });

  test('Login with Invalid Password @regression', async ({ page }) => {
    await method.login(page, process.env.USER_NAME!, login.Invaldipassword);
    await Login.validateLoginError(page);
  });

  test('Login with Empty Username @regression', async ({ page }) => {
    await method.login(page, '', process.env.USER_PASSWORD!);
    await Login.validateLoginError(page, 'Empty Username');
  });

  test('Login with Empty Password @regression', async ({ page }) => {
    await method.login(page, process.env.USER_NAME!, '');
    await Login.validateLoginError(page, 'Empty Password');
  });

  test('Login with Both Fields Empty @regression', async ({ page }) => {
    await method.login(page, '', '');
    await Login.validateLoginError(page, 'Fields Empty');
  });
});