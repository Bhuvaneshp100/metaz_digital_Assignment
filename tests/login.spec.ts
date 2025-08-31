import { test } from '@playwright/test';
import method from '../method/common';
import Login from '../method/login';
import { login } from '../test-data/login';

test.describe('Login page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
  });

  test('Successful Login with Valid Credentials', async ({ page }) => {
    await method.login(page);
    await Login.validateSuccessfulLogin(page);
  });

  test('Login page UI Elements Validation', async ({ page }) => {
    await Login.validateLoginPageUI(page);
  });

  test('Login with Invalid Username', async ({ page }) => {
    await method.login(page, login.Invaldiusername, process.env.USER_PASSWORD!);
    await Login.validateLoginError(page);
  });

  test('Login with Invalid Password', async ({ page }) => {
    await method.login(page, process.env.USER_NAME!, login.Invaldipassword);
    await Login.validateLoginError(page);
  });

  test('Login with Empty Username', async ({ page }) => {
    await method.login(page, '', process.env.USER_PASSWORD!);
    await Login.validateLoginError(page, 'Empty Username');
  });

  test('Login with Empty Password', async ({ page }) => {
    await method.login(page, process.env.USER_NAME!, '');
    await Login.validateLoginError(page, 'Empty Password');
  });

  test('Login with Both Fields Empty', async ({ page }) => {
    await method.login(page, '', '');
    await Login.validateLoginError(page, 'Fields Empty');
  });

});



