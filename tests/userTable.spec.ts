// import { test, expect } from '@playwright/test';
// import method from '../method/common';
// import userTable from '../method/userTable';
// import { testData } from '../test-data/userTestData';

// function generateUniqueUsername(base: string) {
//     const timestamp = Date.now(); // unique number each run
//     return `${base}${timestamp}`;
// }

// test('User Table Operations', async ({ page }) => {
//     const NewUsername = generateUniqueUsername('qatest');
//     const UpdateUsername = generateUniqueUsername('qatest');

//     await page.goto('/');
//     await method.login(page);
//     await userTable.validateViewSystemUsersPage(page);
//     await page.pause();
//     await userTable.addUser(page, testData.users.employeeName, NewUsername, testData.users.employeePassword);
//       await userTable.editUser(page, NewUsername, '', UpdateUsername);
//       await userTable.deleteUser(page, UpdateUsername);
//       await userTable.searchByUserName(page, testData.users.UserRole);

// });

// tests/user-crud.spec.ts
import { test, expect } from '@playwright/test';
import method from '../method/common';
import userTable from '../method/userTable';
import { testData } from '../test-data/userTestData';


test('User Table Operations', async ({ page }) => {
    const username = `testuser_${Date.now()}`;
    const NewUsername = `qa${username}`;

    await page.goto('/');
    await method.login(page);
    await userTable.validateViewSystemUsersPage(page);

    await test.step('Add user', async () => {
        await userTable.ValidateAddNewUserPage(page)
        await userTable.addUser(page, testData.users.employeeName, NewUsername, testData.users.employeePassword);
        await userTable.validateUserInTable(page, NewUsername, 'Ranga Akunuri');
    });

    await test.step('Edit user', async () => {
        await userTable.editUser(page, NewUsername, '', NewUsername);
        await userTable.validateUserInTable(page, NewUsername);

    });

    await test.step('Delete user', async () => {
        await userTable.deleteUser(page, NewUsername);

    });
});



