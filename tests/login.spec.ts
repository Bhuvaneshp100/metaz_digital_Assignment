import { test , expect} from '@playwright/test';
import  method  from '../method/common';


test('Login Workflow flow', async ({ page }) => {
  await method.login(page);
  await method.validateDashboard(page);
});
