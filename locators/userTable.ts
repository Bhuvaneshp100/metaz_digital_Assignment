const locator = {

    addUser: {
          roleDropdown: (page: any) => page.locator('form i').first(),
        roleOption: (page: any, roleName: string) => page.getByRole('option', { name: roleName }),
        selectedRoleText: (page: any, roleName: string) => page.locator('form').getByText(roleName),
        employeeSearchInput: (page: any) => page.getByRole('textbox', { name: 'Type for hints...' }),
        employeeOption: (page: any, employeeName: string) => page.getByRole('option', { name: employeeName }),
        statusDropdown: (page: any) => page.locator('form i').nth(1),
        statusOption: (page: any, statusName: string) => page.getByRole('option', { name: statusName }),
        selectedStatusText: (page: any) => page.getByText('Enabled'),
        usernameInput: (page: any) => page.getByRole('textbox').nth(2),
        passwordInput: (page: any) => page.getByRole('textbox').nth(3),
        confirmPasswordInput: (page: any) => page.getByRole('textbox').nth(4),
        passwordSection: (page: any) => page.getByText('PasswordFor a strong password'),
        weakPasswordText: (page: any) => page.locator('form div').filter({ hasText: 'Weak PasswordFor a strong' }).first(),
        saveButton: (page: any) => page.getByRole('button', { name: 'Save' }),
        addButton: (page: any) => page.getByRole('button', { name: ' Add' }),
        usernameValidation: (page: any) => page.getByRole('textbox').nth(2),
        statusValidation: (page: any) => page.getByText('Enabled')    
    },
    systemUsersLocators: {
        adminLink: (page: any) => page.getByRole('link', { name: 'Admin' }),
        addButton: (page: any) => page.getByRole('button', { name: ' Add' }),
        resetButton: (page: any) => page.getByRole('button', { name: 'Reset' }),
        searchButton: (page: any) => page.getByRole('button', { name: 'Search' }),
        userManagementHeading: (page: any) => page.getByRole('heading', { name: '/ User Management' }),
        systemUsersHeading: (page: any) => page.getByRole('heading', { name: 'System Users' }),
        usernameHeader: (page: any) => page.getByRole('columnheader', { name: 'Username ' }),
        userRoleHeader: (page: any) => page.getByRole('columnheader', { name: 'User Role ' }),
        employeeNameHeader: (page: any) => page.getByRole('columnheader', { name: 'Employee Name ' }),
        statusHeader: (page: any) => page.getByRole('columnheader', { name: 'Status ' }),
        actionsHeader: (page: any) => page.getByRole('columnheader', { name: 'Actions' }),
        banner: (page: any) => page.getByRole('banner'),
        form: (page: any) => page.locator('form')
    },
     addUserPageLocators :{
    addButton: (page: any) => page.getByRole('button', { name: ' Add' }),
    pageTitle: (page: any) => page.getByRole('heading', { name: 'Add User' }),
    pageContainer: (page: any) => page.locator('#app'),
    
    // Form Fields
    userRoleLabel: (page: any) => page.getByText('User Role'),
    userRoleDropdown: (page: any) => page.locator('.oxd-select-text').first(),
    userRoleIcon: (page: any) => page.locator('form i').first(),
    
    employeeNameLabel: (page: any) => page.getByText('Employee Name'),
    employeeNameDiv: (page: any) => page.locator('div').filter({ hasText: /^Employee Name$/ }).nth(2),
    employeeSearchInput: (page: any) => page.getByRole('textbox', { name: 'Type for hints...' }),
    
    statusLabel: (page: any) => page.getByText('Status'),
    
    usernameLabel: (page: any) => page.getByText('Username'),
    usernameInput: (page: any) => page.getByRole('textbox').nth(2),
    
    passwordLabel: (page: any) => page.getByText('Password', { exact: true }),
    passwordInput: (page: any) => page.getByRole('textbox').nth(3),
    
    confirmPasswordLabel: (page: any) => page.getByText('Confirm Password'),
    confirmPasswordInput: (page: any) => page.getByRole('textbox').nth(4),
    
    passwordHelpText: (page: any) => page.getByText('For a strong password, please'),
    passwordHelpFullText: (page: any) => page.locator('form'),
    requiredText: (page: any) => page.getByText('* Required'),
    
    // Buttons
    cancelButton: (page: any) => page.getByRole('button', { name: 'Cancel' }),
    saveButton: (page: any) => page.getByRole('button', { name: 'Save' })
}
}
export default locator;