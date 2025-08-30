
const userLocators = {
  login:{
    username: (page: any) => page.getByRole('textbox', { name: 'username' }),
    password: (page: any) => page.getByRole('textbox', { name: 'password' }),
    loginButton: (page: any) => page.getByRole('button', { name: 'Login' }),
  },

  addUser: {
    adminLink: 'role=link[name="Admin"]',
    addButton: 'role=button[name=" Add"]',
    roleDropdown: 'form i >> nth=0',
    roleOptionAdmin: 'role=option[name="Admin"] >> span',
    employeeSearchInput: 'role=textbox[name="Type for hints..."]',
    employeeSelect: (employeeName: string) => `text=${employeeName}`,
    statusDropdown: 'form i >> nth=1',
    statusOptionEnabled: 'role=option[name="Enabled"]',
    usernameInput: 'role=textbox >> nth=2',
    passwordInput: 'role=textbox >> nth=3',
    confirmPasswordInput: 'role=textbox >> nth=4',
    saveButton: 'role=button[name="Save"]',
    userTable: 'table',
  },
editUser: {
    tableContainer: '.orangehrm-container',
    rowByName: (rowName: string) => `role=row[name="${rowName}"]`,
   editButtonInRow: (page, rowName: string) => 
    page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').nth(1),

    userRowByName: (rowName: string) => `role=row >> text=${rowName}`,
    employeeSearchInput: 'role=textbox[name="Type for hints..."]',
    statusDropdown: 'form i >> nth=1',
    statusOptionDisabled: 'role=option[name="Disabled"]',
    usernameInput: 'role=textbox >> nth=2',
    saveButton: 'role=button[name="Save"]',
  },

  deleteUser: {
  deleteButtonInRow: (page, rowName: string) =>
    page.getByRole('row', { name: ` ${rowName}` }).getByRole('button').first(),
  confirmDeleteButton: (page) => page.getByRole('button', { name: ' Yes, Delete' })
  },
  searchFilter:{
    
  searchInput: (page) => page.getByRole('textbox').nth(1),
  roleDropdown: (page) => page.locator('form i').first(),
  statusDropdown: (page) => page.locator('form i').nth(1),
  searchButton: (page) => page.getByRole('button', { name: 'Search' }),
  
  // Dropdown options
  roleOption: (page, roleName: string) => 
    page.getByRole('option', { name: roleName }).locator('span'),
  
  statusOption: (page, statusName: string) =>
    page.getByRole('option', { name: statusName }),
  
  // Validation locators
  searchResultText: (page, text: string) => page.getByText(text),
  userRowByName: (page, userName: string) =>
    page.getByRole('row', { name: ` ${userName}` })

  }
 };

export default userLocators;
