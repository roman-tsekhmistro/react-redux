import React from 'react';
import './login-page.scss';
import LoginForm from '../../components/form/form';

const LoginPage = () => {
  return (
      <div className="login__page--wrapper">
        <img className="bg__image" src='https://source.unsplash.com/random' alt=''></img>
        <div className="login__form__wrapper">
          <LoginForm/>
        </div>
      </div>
  );
};

export default LoginPage;