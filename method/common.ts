import { Page ,expect} from '@playwright/test';
import locators from '../locators/commonLocator';

const method = {

  async login(page: Page, username?: string, password?: string): Promise<void> {
    const user = username ?? process.env.USER_NAME!;
    const pass = password ?? process.env.USER_PASSWORD!;
    await locators.login.username(page).fill(user);
    await locators.login.password(page).fill(pass);
    await locators.login.loginButton(page).click();
  },







// async editUser(page, rowName: string, newEmployee: string, newUsername: string) {
//   await page.locator(locators.editUser.tableContainer).click();
//   await page.locator(locators.editUser.userRowByName(rowName)).click();
//   const editButton = locators.editUser.editButtonInRow(page, rowName);
//   await editButton.click();
//   await page.locator(locators.editUser.usernameInput).fill(newUsername);
//   await page.locator(locators.editUser.saveButton).click();
 
// },

// async  deleteUser(page: Page, rowName: string) {
//   // await page.locator(locators.editUser.userRowByName(rowName)).click();
//   await locators.deleteUser.deleteButtonInRow(page, rowName).click();
//   await locators.deleteUser.confirmDeleteButton(page).click();
//   await page.waitForTimeout(1000);
  
// },
// async  searchByUserName(page: Page, searchTerm: string) {
//   await locators.searchFilter.searchInput(page).click();
//   await locators.searchFilter.searchInput(page).fill(searchTerm);
//   await locators.searchFilter.searchButton(page).click();
//   await this.filterByRoleAndStatus(page, 'Admin', 'Enabled');
//  await this.validateUserInResults(page, 'Admin User', true);
// },

// async  filterByRoleAndStatus(page: Page, role: string, status: string) {
//   await locators.searchFilter.roleDropdown(page).click();
//   await locators.searchFilter.roleOption(page, role).click();
  
//   await locators.searchFilter.statusDropdown(page).click();
//   await locators.searchFilter.statusOption(page, status).click();
  
//   await locators.searchFilter.searchButton(page).click();
// },

// async  validateUserInResults(page: Page, userName: string, shouldExist: boolean = true) {
//   const userRow = locators.searchFilter.userRowByName(page, userName);
  
//   // if (shouldExist) {
//   //   await expect(userRow).toBeVisible();
//   // } else {
//   //   await expect(userRow).not.toBeVisible();
//   // }
// }

 

};

export default method;
