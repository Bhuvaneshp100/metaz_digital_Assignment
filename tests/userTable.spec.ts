import { test, expect } from '@playwright/test';
import method from '../method/common';
import userTable from '../method/userTable';
import { testData } from '../test-data/userTestData';


test('User Table Operations', async ({ page }) => {

    await page.goto('/');
    await method.login(page);
    await userTable.validateViewSystemUsersPage(page);
     const NewUsername = await method.generateNewUsername();

    await test.step('Add user', async () => {
        await userTable.ValidateAddNewUserPage(page)
        await userTable.addUser(page, testData.users.employeeName, NewUsername, testData.users.employeePassword);
        await userTable.validateUserInTable(page, NewUsername, 'Ranga Akunuri');
        await userTable.searchAndValidateUser(page, { username: NewUsername },
            { expectedUsername: NewUsername, expectedEmployee: testData.users.employeeName, expectedRole: 'Admin', expectedStatus: 'Enabled' });
        // console.log("sucessfully create new user ")
    });

    await test.step('Edit user', async () => {
        await userTable.editUser(page, NewUsername, '', NewUsername);
        await userTable.validateUserInTable(page, NewUsername);
        await userTable.searchAndValidateUser(page,
            { username: NewUsername },
            { expectedUsername: NewUsername, expectedEmployee: testData.users.employeeName, expectedRole: 'ESS', expectedStatus: 'Disabled' });
        // console.log("sucessfully edit user ")
    });

    await test.step('Delete user', async () => {
        await userTable.deleteUser(page, NewUsername);
        await userTable.searchAndValidateUser(page, { username: NewUsername });
    });
    // console.log("sucessfully delete user ")
});



