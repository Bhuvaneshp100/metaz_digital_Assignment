const locator = {

    addUser: {
        addButton: (page: any) => page.getByRole('button', { name: /Add/i }),
        roleDropdown: (page: any) => page.getByRole('combobox', { name: /user role/i }).first(),
        roleOptionAdmin: (page: any) => page.getByRole('option', { name: /admin/i }),
        employeeSearchInput: (page: any) => page.getByPlaceholder('Type for hints...'),
        employeeSelect: (page: any, employeeName: string) => page.getByText(employeeName, { exact: true }),
        statusDropdown: (page: any) => page.getByRole('combobox', { name: /status/i }),
        statusOptionEnabled: (page: any) => page.getByRole('option', { name: /enabled/i }),
        usernameInput: (page: any) => page.getByRole('textbox', { name: /username/i }),
        passwordInput: (page: any) => page.getByRole('textbox', { name: /password/i }),
        confirmPasswordInput: (page: any) => page.getByRole('textbox', { name: /confirm password/i }),
        saveButton: (page: any) => page.getByRole('button', { name: /save/i }),
        userTable: (page: any) => page.getByRole('table')
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
    }
}
export default locator;