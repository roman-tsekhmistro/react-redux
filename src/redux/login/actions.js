export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logIn = data => ({ type: LOGIN, token: data });
export const logOut = () => ({ type: LOGOUT });
