import { Page, expect } from '@playwright/test';
import locator from '../locators/userTable';

const userTable = {

    async addUser(Page: Page, employeeName: string, username: string, password: string) {
        await Page.locator('form i').first().click();
        await Page.getByRole('option', { name: 'Admin' }).click();
        await expect(Page.locator('form').getByText('Admin')).toBeVisible();
        await Page.getByRole('textbox', { name: 'Type for hints...' }).click();
        await Page.getByRole('textbox', { name: 'Type for hints...' }).fill(employeeName.substring(0, 6));
        await Page.getByRole('option', { name: 'Ranga Akunuri' }).click();
        await Page.locator('form i').nth(1).click();
        await Page.getByRole('option', { name: 'Enabled' }).click();
        await expect(Page.getByText('Enabled')).toBeVisible();
        await Page.getByRole('textbox').nth(2).click();
        await Page.getByRole('textbox').nth(2).fill(username);
        await expect(Page.getByRole('textbox').nth(2)).toBeVisible();
        await Page.getByText('PasswordFor a strong password').click();
        await Page.getByRole('textbox').nth(3).click();
        await Page.getByRole('textbox').nth(3).fill(password);
        await Page.getByRole('textbox').nth(4).click();
        await Page.getByRole('textbox').nth(4).fill(password);
        await Page.getByRole('textbox').nth(4).press('Tab');
        await Page.locator('form div').filter({ hasText: 'Weak PasswordFor a strong' }).first().click();
        await Page.getByRole('button', { name: 'Save' }).click();
    },
    async editUser(page, rowName: string, newEmployee: string, newUsername: string) {
        await page.getByRole('columnheader', { name: 'Username ' }).click();
        await page.getByText(rowName).click();
        await page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').nth(1).click();
        await page.locator('form i').first().click();
        await page.getByRole('option', { name: 'ESS' }).click();
        await page.getByRole('textbox', { name: 'Type for hints...' }).click();
        await page.locator('form i').nth(1).click();
        await page.getByRole('option', { name: 'Disabled' }).click();
        await page.getByRole('textbox').nth(2).click();
        await page.getByRole('button', { name: 'Save' }).click();
    },

    async validateViewSystemUsersPage(Page: Page): Promise<void> {
        await locator.systemUsersLocators.adminLink(Page).click();
        await expect(locator.systemUsersLocators.addButton(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.resetButton(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.searchButton(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.userManagementHeading(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.systemUsersHeading(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.form(Page)).toContainText('User Role');
        await expect(locator.systemUsersLocators.form(Page)).toContainText('Status');
        await expect(locator.systemUsersLocators.usernameHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.userRoleHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.employeeNameHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.statusHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.actionsHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.userRoleHeader(Page)).toBeVisible();
        await expect(locator.systemUsersLocators.banner(Page)).toContainText('AdminUser Management');
    },

    async ValidateAddNewUserPage(Page: Page): Promise<void> {
        await Page.getByRole('button', { name: ' Add' }).click();
        await expect(Page.locator('#app')).toContainText('Add User');
        await expect(Page.getByRole('heading', { name: 'Add User' })).toBeVisible();
        await expect(Page.getByText('User Role')).toBeVisible();
        await expect(Page.locator('.oxd-select-text').first()).toBeVisible();
        await expect(Page.locator('form i').first()).toBeVisible();
        await expect(Page.locator('div').filter({ hasText: /^Employee Name$/ }).nth(2)).toBeVisible();
        await expect(Page.getByText('Employee Name')).toBeVisible();
        await expect(Page.getByRole('textbox', { name: 'Type for hints...' })).toBeVisible();
        await expect(Page.getByText('Status')).toBeVisible();
        await expect(Page.getByText('Username')).toBeVisible();
        await expect(Page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text')).toBeVisible();
        await expect(Page.getByRole('textbox').nth(2)).toBeVisible();
        await expect(Page.getByText('Username')).toBeVisible();
        await expect(Page.getByText('Password', { exact: true })).toBeVisible();
        await expect(Page.getByRole('textbox').nth(3)).toBeVisible();
        await expect(Page.getByText('Confirm Password')).toBeVisible();
        await expect(Page.getByRole('textbox').nth(4)).toBeVisible();
        await expect(Page.getByText('For a strong password, please')).toBeVisible();
        await expect(Page.locator('form')).toContainText('For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers');
        await expect(Page.getByText('* Required')).toBeVisible();
        await expect(Page.getByRole('button', { name: 'Cancel' })).toBeVisible();
        await expect(Page.getByRole('button', { name: 'Save' })).toBeVisible();
    },

    async ValidateNewAddedUser(Page: Page): Promise<void> {
        await expect(Page.getByText('QAtest23')).toBeVisible();
        await expect(Page.getByText('Ranga Akunuri')).toBeVisible();
        await expect(Page.getByRole('table')).toContainText('Admin');
        await expect(Page.getByRole('table')).toContainText('Enabled');
    },
    async validateUserInTable(page: Page, username: string, employeeName?: string, role?: string, status?: string): Promise<void> {
        await page.getByText(username).click();
        await expect(page.getByText(username)).toBeVisible();
    },
    async deleteUser(page: Page, rowName: string): Promise<void> {
        await page.getByText(rowName).click();
        await page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').first().click();
        await page.getByRole('button', { name: ' Yes, Delete' }).click();

    }

}
export default userTable;