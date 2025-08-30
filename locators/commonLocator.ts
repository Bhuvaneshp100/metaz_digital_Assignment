
const userLocators = {
  login:{
    username: (page: any) => page.getByRole('textbox', { name: 'username' }),
    password: (page: any) => page.getByRole('textbox', { name: 'password' }),
    loginButton: (page: any) => page.getByRole('button', { name: 'Login' }),
  },
    dashboard: {
    clientBrandBanner: (page: any) => page.getByRole('link', { name: 'client brand banner' }),
    adminLink: (page: any) => page.getByRole('link', { name: 'Admin' }),
    searchTextBox: (page: any) => page.getByRole('textbox', { name: 'Search' })
  },

 };

export default userLocators;
