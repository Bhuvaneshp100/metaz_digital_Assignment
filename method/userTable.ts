import { Page, expect } from '@playwright/test';
import locator from '../locators/userTable';
import { testData } from '../test-data/userTestData';

const data = testData.users;
const Text = testData.pageTexts;
const userTable = {

  async addUser(Page: Page, employeeName: string, username: string, password: string) {
    await locator.addUser.roleDropdown(Page).click();
    await locator.addUser.roleOption(Page, data.role).click();
    await expect(locator.addUser.selectedRoleText(Page, data.role)).toBeVisible();
    await locator.addUser.employeeSearchInput(Page).click();
    await locator.addUser.employeeSearchInput(Page).fill(employeeName.substring(0, 6));
    await locator.addUser.employeeOption(Page, employeeName).click();
    await locator.addUser.statusDropdown(Page).click();
    await locator.addUser.statusOption(Page, data.selectoption).click();
    await expect(locator.addUser.selectedStatusText(Page)).toBeVisible();
    await locator.addUser.usernameInput(Page).click();
    await locator.addUser.usernameInput(Page).fill(username);
    await expect(locator.addUser.usernameValidation(Page)).toBeVisible();
    await locator.addUser.passwordSection(Page).click();
    await locator.addUser.passwordInput(Page).click();
    await locator.addUser.passwordInput(Page).fill(password);
    await locator.addUser.confirmPasswordInput(Page).click();
    await locator.addUser.confirmPasswordInput(Page).fill(password);
    await locator.addUser.confirmPasswordInput(Page).press('Tab');
    await locator.addUser.weakPasswordText(Page).click();
    await locator.addUser.saveButton(Page).click();
  },
  async editUser(page: Page, rowName: string, newEmployee: string, newUsername: string) {
    await locator.editUserLocators.usernameColumnHeader(page).click();
    await locator.editUserLocators.userRowByName(page, rowName).click();
    await locator.editUserLocators.editButton(page, rowName).click();
    await locator.editUserLocators.roleDropdown(page).click();
    await locator.editUserLocators.roleOption(page, testData.editUser.role).click();
    if (newEmployee) {
      await locator.editUserLocators.employeeSearchInput(page).click();
      await locator.editUserLocators.employeeSearchInput(page).fill(newEmployee.substring(0, 6));
    }
    await locator.editUserLocators.statusDropdown(page).click();
    await locator.editUserLocators.statusOption(page, testData.editUser.selectoption).click();
    await locator.editUserLocators.usernameInput(page).click();
    await locator.editUserLocators.usernameInput(page).fill(newUsername);
    await locator.editUserLocators.saveButton(page).click();
  },

  async validateViewSystemUsersPage(Page: Page): Promise<void> {
    await locator.systemUsersLocators.adminLink(Page).click();
    await expect(locator.systemUsersLocators.addButton(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.resetButton(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.searchButton(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.userManagementHeading(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.systemUsersHeading(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.form(Page)).toContainText(Text.userRoleLabel);
    await expect(locator.systemUsersLocators.form(Page)).toContainText(Text.statusLabel);
    await expect(locator.systemUsersLocators.usernameHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.userRoleHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.employeeNameHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.statusHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.actionsHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.userRoleHeader(Page)).toBeVisible();
    await expect(locator.systemUsersLocators.banner(Page)).toContainText(Text.userManagementHeading);
  },

  async ValidateAddNewUserPage(Page: Page): Promise<void> {
    await locator.addNewUserPage.addButton(Page).click();
    await expect(locator.addNewUserPage.appContainer(Page)).toContainText(Text.addUserButton);
    await expect(locator.addNewUserPage.pageHeading(Page)).toBeVisible();
    await expect(locator.addNewUserPage.userRoleLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.userRoleDropdown(Page)).toBeVisible();
    await expect(locator.addNewUserPage.userRoleIcon(Page)).toBeVisible();
    await expect(locator.addNewUserPage.employeeNameDiv(Page)).toBeVisible();
    await expect(locator.addNewUserPage.employeeNameLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.employeeSearchInput(Page)).toBeVisible();
    await expect(locator.addNewUserPage.statusLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.usernameLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.statusDropdown(Page)).toBeVisible();
    await expect(locator.addNewUserPage.usernameInput(Page)).toBeVisible();
    await expect(locator.addNewUserPage.passwordLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.passwordInput(Page)).toBeVisible();
    await expect(locator.addNewUserPage.confirmPasswordLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.confirmPasswordInput(Page)).toBeVisible();
    await expect(locator.addNewUserPage.passwordHelpText(Page)).toBeVisible();
    await expect(locator.addNewUserPage.formContainer(Page)).toContainText(Text.passwordLabel);
    await expect(locator.addNewUserPage.requiredLabel(Page)).toBeVisible();
    await expect(locator.addNewUserPage.cancelButton(Page)).toBeVisible();
    await expect(locator.addNewUserPage.saveButton(Page)).toBeVisible();
  },

  async ValidateNewAddedUser(Page: Page): Promise<void> {
    await expect(locator.userValidationLocators.usernameText(Page, data.username)).toBeVisible();
    await expect(locator.userValidationLocators.employeeNameText(Page, data.employeeName)).toBeVisible();
    await expect(locator.userValidationLocators.roleInTable(Page, data.role)).toBeVisible();
    await expect(locator.userValidationLocators.statusInTable(Page, data.selectoption)).toBeVisible();
  },
  async validateUserInTable(page: Page, username: string, employeeName?: string, role?: string, status?: string): Promise<void> {
    await page.getByText(username).click();
    await expect(page.getByText(username)).toBeVisible();
  },
  async deleteUser(page: Page, rowName: string): Promise<void> {
    await locator.deleteUserLocators.userRowByName(page, rowName).click();
    await locator.deleteUserLocators.deleteButton(page, rowName).click();
    await locator.deleteUserLocators.confirmDeleteButton(page).click();
  },
  async searchAndValidateUser(
    page: Page, searchCriteria: { username?: string; employeeName?: string; role?: string; status?: string; },
    validationCriteria: { expectedUsername?: string; expectedEmployee?: string; expectedRole?: string; expectedStatus?: string; } = {}): Promise<void> {
    const { username, employeeName, role, status } = searchCriteria;
    const { expectedUsername, expectedEmployee, expectedRole, expectedStatus } = validationCriteria;

    await locator.searchLocators.resetButton(page).click();

    if (username) {
      await locator.searchLocators.usernameSearchInput(page).click();
      await locator.searchLocators.usernameSearchInput(page).fill(username);
    }

    if (employeeName) {
      await locator.searchLocators.employeeSearchInput(page).click();
      await locator.searchLocators.employeeSearchInput(page).fill(employeeName.substring(0, 6));
      await locator.searchLocators.employeeOption(page, employeeName).click();
    }

    if (role) {
      await locator.searchLocators.roleDropdown(page).click();
      await locator.searchLocators.roleOption(page, role).click();
    }

    if (status) {
      await locator.searchLocators.statusDropdown(page).click();
      await locator.searchLocators.statusOption(page, status).click();
    }

    await locator.searchLocators.searchButton(page).click();
    if (await locator.searchLocators.noRecordsFound(page).isVisible()) {
      await expect(locator.searchLocators.noRecordsFound(page)).toBeVisible();
    } else {
      await locator.searchLocators.clearButton(page).isVisible();

      if (expectedUsername) await expect(locator.searchLocators.usernameInTable(page, expectedUsername)).toBeVisible();
      if (expectedEmployee) await expect(locator.searchLocators.employeeInTable(page, expectedEmployee)).toBeVisible();
      if (expectedRole) await expect(locator.searchLocators.roleInTable(page, expectedRole)).toBeVisible();
      if (expectedStatus) await expect(locator.searchLocators.statusInTable(page, expectedStatus)).toBeVisible();
    }
  }

}
export default userTable;