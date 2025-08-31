
const userLocators = {
  login:{
    username: (page: any) => page.getByRole('textbox', { name: 'username' }),
    password: (page: any) => page.getByRole('textbox', { name: 'password' }),
    loginButton: (page: any) => page.getByRole('button', { name: 'Login' }),
  },
 };

export default userLocators;
