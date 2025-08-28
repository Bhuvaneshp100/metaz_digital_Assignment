import { test, expect } from '@playwright/test';
import  method  from '../method/common';
import { testData } from '../test-data/userTestData';

function generateUniqueUsername(base: string) {
  const timestamp = Date.now(); // unique number each run
  return `${base}${timestamp}`;
}

test('User Table Operations', async ({ page }) => {
    const NewUsername = generateUniqueUsername('qatest');
    const UpdateUsername = generateUniqueUsername('qatest');

  await method.login(page);
  await method.addUser(page,testData.users.employeeName, NewUsername, testData.users.employeePassword);
  await method.editUser(page, NewUsername, '', UpdateUsername);
  await method.deleteUser(page, UpdateUsername);
  await method.searchByUserName(page, testData.users.UserRole);
  
});



