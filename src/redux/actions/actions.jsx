export const logIn = data => ({ type: 'LOGIN', token: data });
export const logOut = () => ({ type: 'LOGOUT' });
export const isLoggedIn = () => ({ type: 'IS_LOGGED_IN' });
