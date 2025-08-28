// test-data/mockData.ts
// This should use NAMED exports (not default)
export const mockUsersData = {
  data: [{ 
    id: 1001,
    username: 'testuser',
    userRole: { id: 1, displayName: 'Admin' },
    status: true,
    employee: { 
      empNumber: 1001,
      firstName: 'Test', 
      lastName: 'User' 
    }
  }],
  meta: { 
    total: 1,
    limit: 50,
    offset: 0
  }
};