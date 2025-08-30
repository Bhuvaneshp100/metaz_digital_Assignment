import { Page, expect } from '@playwright/test';

const Login = {

    async validateSuccessfulLogin(page: Page): Promise<void> {
        await Promise.all([
            page.waitForResponse("**/web/index.php/dashboard/index"),
            page.waitForLoadState('networkidle'),
        ]);
        await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Search' })).toBeEmpty();
        await expect(page).toHaveURL(/dashboard/);
        await page.screenshot({ path: 'screenshots/login_success.png', fullPage: true });
    },

    async validateLoginPageUI(page: Page): Promise<void> {
        await expect(page.getByText('Username', { exact: true })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
        await expect(page.getByText('Password', { exact: true })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
        await expect(page.getByText('Forgot your password?')).toBeVisible();
        await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    },

    async validateLoginError(page: Page, expectedMessage?: string): Promise<void> {

        if (expectedMessage === 'Empty Username') {
            await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
            await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
            await expect(page.getByRole('textbox', { name: 'Password' })).not.toHaveValue('');

        }
        else if (expectedMessage === 'Empty Password') {
            await expect(page.getByText('Required')).toBeVisible();
            await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
            await expect(page.getByRole('textbox', { name: 'Username' })).not.toHaveValue('');
        }
        else if (expectedMessage === 'Fields Empty') {
            await expect(page.getByText('Required').first()).toBeVisible();
            await expect(page.getByText('Required').nth(1)).toBeVisible();
        }
        else {
            await expect(
                page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' }))
                .toBeVisible({ timeout: 10000 });
            await expect(page.getByRole('alert')).toContainText('Invalid credentials');
            await expect(page.getByRole('alert').locator('i')).toBeVisible();
        }

    },

}

export default Login;