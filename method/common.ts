import { Page, expect } from '@playwright/test';
import locators from '../locators/commonLocator';
import { mockUsers }from '../test-data/mockUsers';

const method = {

  async login(page: Page, username?: string, password?: string): Promise<void> {
    const user = username ?? process.env.USER_NAME!;
    const pass = password ?? process.env.USER_PASSWORD!;
    await locators.login.username(page).fill(user);
    await locators.login.password(page).fill(pass);
    await locators.login.loginButton(page).click();
  },
  async generateNewUsername(): Promise<string> {
    const username = `testuser_${Date.now()}`;
    return `qa${username}`;
  },

   async setupUsersMock(page: Page)  {
   await page.route('**/api/v2/admin/**', async (route) => {
    const url = route.request().url();
    console.log('Intercepted API:', url);
    
    if (url.includes('users')) {
      const jsonResponse = {
        data: mockUsers.map((u, i) => ({
          id: i + 1,
          userName: u.username,
          employee: { 
            empNumber: i + 100,
            firstName: u.employeeName.split(' ')[0],
            lastName: u.employeeName.split(' ')[1] || '',
            middleName: ''
          },
          userRole: u.userRole,
          status: u.status === 'Enabled', 
        })),
        meta: { total: mockUsers.length, limit: 50, offset: 0 }
      };
      
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(jsonResponse),
      });
    } else {
      await route.continue();
    }
  });
}
};

export default method;
