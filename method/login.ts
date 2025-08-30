import { Page, expect } from '@playwright/test';
import locator from '../locators/login';

const Login = {

    async validateSuccessfulLogin(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
        await page.waitForURL(/dashboard/);
        await expect(locator.dashboard.clientBrandBanner(page)).toBeVisible();
        await expect(locator.dashboard.adminLink(page)).toBeVisible();
        await expect(locator.dashboard.searchTextBox(page)).toBeEmpty();
        await page.screenshot({ path: 'screenshots/login_success.png', fullPage: true });
    },

    async validateLoginPageUI(page: any): Promise<void> {
        await expect(locator.loginpage.usernameLabel(page)).toBeVisible();
        await expect(locator.loginpage.usernameInput(page)).toBeVisible();
        await expect(locator.loginpage.passwordLabel(page)).toBeVisible();
        await expect(locator.loginpage.passwordInput(page)).toBeVisible();
        await expect(locator.loginpage.loginButton(page)).toBeVisible();
        await expect(locator.loginpage.forgotPassword(page)).toBeVisible();
        await expect(locator.loginpage.companyBranding(page)).toBeVisible();
    },

    async validateLoginError(page: any, expectedMessage?: string): Promise<void> {
        if (expectedMessage === 'Empty Username') {
            await expect(locator.loginpage.usernameInput(page)).toBeVisible();
            await expect(locator.loginpage.usernameInput(page)).toBeEmpty();
            await expect(locator.loginpage.passwordInput(page)).not.toHaveValue('');
        }
        else if (expectedMessage === 'Empty Password') {
            await expect(locator.loginpage.requiredText(page)).toBeVisible();
            await expect(locator.loginpage.passwordInput(page)).toBeEmpty();
            await expect(locator.loginpage.usernameInput(page)).not.toHaveValue('');
        }
        else if (expectedMessage === 'Fields Empty') {
            await expect(locator.loginpage.requiredText(page).first()).toBeVisible();
            await expect(locator.loginpage.requiredText(page).nth(1)).toBeVisible();
        }
        else {
            await expect(locator.loginpage.invalidCredentials(page)).toBeVisible();
            await expect(locator.loginpage.alertMessage(page)).toContainText('Invalid credentials');
            await expect(locator.loginpage.alertIcon(page)).toBeVisible();
        }

    }
}

export default Login;