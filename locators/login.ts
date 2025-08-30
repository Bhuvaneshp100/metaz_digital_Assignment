const locator = {

  loginpage: {
    usernameLabel: (page: any) => page.getByText('Username', { exact: true }),
    usernameInput: (page: any) => page.getByRole('textbox', { name: 'Username' }),
    passwordLabel: (page: any) => page.getByText('Password', { exact: true }),
    passwordInput: (page: any) => page.getByRole('textbox', { name: 'Password' }),
    loginButton: (page: any) => page.getByRole('button', { name: 'Login' }),
    forgotPassword: (page: any) => page.getByText('Forgot your password?'),
    companyBranding: (page: any) => page.getByRole('img', { name: 'company-branding' }),
    requiredText: (page: any) => page.getByText('Required'),
    invalidCredentials: (page: any) => page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' }),
    alertMessage: (page: any) => page.getByRole('alert'),
    alertIcon: (page: any) => page.getByRole('alert').locator('i')
  },
  dashboard: {
    clientBrandBanner: (page: any) => page.getByRole('link', { name: 'client brand banner' }),
    adminLink: (page: any) => page.getByRole('link', { name: 'Admin' }),
    searchTextBox: (page: any) => page.getByRole('textbox', { name: 'Search' })
  }
}

export default locator;
