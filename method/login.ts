import { Page, expect } from '@playwright/test';

const Login = {

   async validateSuccessfulLogin(page: Page): Promise<void> {
    console.log('Starting login validation...');
    console.log('Current URL before wait:', page.url());
    
    try {
        // Wait for dashboard URL
        await page.waitForURL(/dashboard/, { timeout: 30000 });
        console.log('✅ Successfully navigated to dashboard');
        console.log('Current URL after wait:', page.url());
        
        // Wait for network to be idle
        await page.waitForLoadState('networkidle');
        console.log('✅ Network is idle');
        
        // Check visibility of elements
        console.log('Checking client brand banner...');
        await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
        console.log('✅ Client brand banner is visible');
        
        console.log('Checking Admin link...');
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
        console.log('✅ Admin link is visible');
        
        console.log('Checking Search textbox is empty...');
        await expect(page.getByRole('textbox', { name: 'Search' })).toBeEmpty();
        console.log('✅ Search textbox is empty');
        
        // Final URL check
        await expect(page).toHaveURL(/dashboard/);
        console.log('✅ Final URL validation passed');
        
        // Take screenshot
        await page.screenshot({ path: 'screenshots/login_success.png', fullPage: true });
        console.log('✅ Screenshot taken');
        
    } catch (error) {
        console.log('❌ Login validation failed:', error.message);
        console.log('Current URL at failure:', page.url());
        
        // Take screenshot on failure for debugging
        await page.screenshot({ path: 'screenshots/login_failure_debug.png', fullPage: true });
        console.log('📸 Failure screenshot saved');
        
        throw error;
    }
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