import { Page, expect } from '@playwright/test';
import locator from '../locators/userTable';

const userTable = {

  async waitForElementReady(page: Page, selector: string) {
    await page.waitForSelector(selector, { state: 'visible' });
  },

  async addUser(page: Page, employeeName: string, username: string, password: string) {
    await locator.addUser.roleDropdown(page).click();
    await locator.addUser.roleOption(page, 'Admin').click();
    await expect(locator.addUser.selectedRoleText(page, 'Admin')).toBeVisible();

    await locator.addUser.employeeSearchInput(page).click();
    await locator.addUser.employeeSearchInput(page).fill(employeeName.substring(0, 6));
    
    // Wait for employee options to load
    await this.waitForElementReady(page, '[role="option"]');
    await locator.addUser.employeeOption(page, employeeName).click();

    await locator.addUser.statusDropdown(page).click();
    await locator.addUser.statusOption(page, 'Enabled').click();
    await expect(locator.addUser.selectedStatusText(page)).toBeVisible();

    await locator.addUser.usernameInput(page).click();
    await locator.addUser.usernameInput(page).fill(username);
    await expect(locator.addUser.usernameValidation(page)).toBeVisible();

    await locator.addUser.passwordSection(page).click();
    await locator.addUser.passwordInput(page).click();
    await locator.addUser.passwordInput(page).fill(password);

    await locator.addUser.confirmPasswordInput(page).click();
    await locator.addUser.confirmPasswordInput(page).fill(password);
    await locator.addUser.confirmPasswordInput(page).press('Tab');

    await locator.addUser.weakPasswordText(page).click();
    await locator.addUser.saveButton(page).click();

    // Wait for success message or page change
    await page.waitForLoadState('networkidle');
  },

  async editUser(page: Page, rowName: string, newEmployee: string, newUsername: string) {
    await page.getByRole('columnheader', { name: 'Username ' }).click();
    
    // Wait for the specific row to be visible
    await this.waitForElementReady(page, `text=${rowName}`);
    await page.getByText(rowName).click();
    
    // Wait for edit button to be ready
    const editButton = page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').nth(1);
    await editButton.waitFor({ state: 'visible' });
    await editButton.click();

    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'ESS' }).click();

    await page.getByRole('textbox', { name: 'Type for hints...' }).click();

    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Disabled' }).click();

    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill(newUsername);

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForLoadState('networkidle');
  },

  async validateViewSystemUsersPage(page: Page): Promise<void> {
    await locator.systemUsersLocators.adminLink(page).click();
    await page.waitForLoadState('networkidle');
    
    await expect(locator.systemUsersLocators.addButton(page)).toBeVisible();
    await expect(locator.systemUsersLocators.resetButton(page)).toBeVisible();
  },

  async ValidateAddNewUserPage(page: Page): Promise<void> {
    await page.getByRole('button', { name: ' Add' }).click();
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('#app')).toContainText('Add User');
    await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();
  },

  async ValidateNewAddedUser(page: Page, username: string, employeeName: string): Promise<void> {
    // Wait for the user to appear in table
    await page.waitForSelector(`text=${username}`, { state: 'visible' });
    await expect(page.getByText(username)).toBeVisible();
    await expect(page.getByText(employeeName)).toBeVisible();
  },

  async validateUserInTable(page: Page, username: string, employeeName?: string): Promise<void> {
    await page.waitForSelector(`text=${username}`, { state: 'visible' });
    await page.getByText(username).click();
    await expect(page.getByText(username)).toBeVisible();
  },

  async deleteUser(page: Page, rowName: string): Promise<void> {
    await page.waitForSelector(`text=${rowName}`, { state: 'visible' });
    await page.getByText(rowName).click();
    
    const deleteButton = page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').first();
    await deleteButton.waitFor({ state: 'visible' });
    await deleteButton.click();

    await page.getByRole('button', { name: 'Yes, Delete' }).waitFor({ state: 'visible' });
    await page.getByRole('button', { name: 'Yes, Delete' }).click();
    
    await page.waitForLoadState('networkidle');
  },

  async searchAndValidateUser(
    page: Page, 
    searchCriteria: { username?: string; employeeName?: string; role?: string; status?: string; },
    validationCriteria: { expectedUsername?: string; expectedEmployee?: string; expectedRole?: string; expectedStatus?: string; } = {}
  ): Promise<void> {
    const { username, employeeName, role, status } = searchCriteria;
    const { expectedUsername, expectedEmployee, expectedRole, expectedStatus } = validationCriteria;

    await page.getByRole('button', { name: 'Reset' }).click();
    await page.waitForLoadState('networkidle');

    if (username) {
      await page.getByRole('textbox').nth(1).fill(username);
    }

    if (employeeName) {
      await page.getByRole('textbox', { name: 'Type for hints...' }).fill(employeeName.substring(0, 6));
      await this.waitForElementReady(page, '[role="option"]');
      await page.getByRole('option', { name: employeeName }).click();
    }

    if (role) {
      await page.locator('form i').first().click();
      await page.getByRole('option', { name: role }).click();
    }

    if (status) {
      await page.locator('form i').nth(1).click();
      await page.getByRole('option', { name: status }).click();
    }

    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForLoadState('networkidle');

    const noRecordsElement = page.getByText('No Records Found');
    const isNoRecordsVisible = await noRecordsElement.isVisible().catch(() => false);

    if (isNoRecordsVisible) {
      await expect(noRecordsElement).toBeVisible();
    } else {
      if (expectedUsername) {
        await page.waitForSelector(`text=${expectedUsername}`, { state: 'visible' });
        await expect(page.getByText(expectedUsername)).toBeVisible();
      }
      if (expectedEmployee) await expect(page.getByText(expectedEmployee)).toBeVisible();
      if (expectedRole) await expect(page.getByRole('cell', { name: expectedRole })).toBeVisible();
      if (expectedStatus) await expect(page.getByText(expectedStatus)).toBeVisible();
    }
  }
}

export default userTable;