import React from 'react';
import './Form.scss';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useNavigate} from 'react-router-dom';

function LoginForm() {

  const navigation = useNavigate();

  const handleSubmit = () => {
    const setLocalStorage = window.localStorage;
    setLocalStorage.setItem('TOKEN', 'Hjak1jasi8');

    let TOKEN = localStorage.getItem('TOKEN');
    if (!TOKEN) {
      navigation('/login');
    } else {
      navigation('/');
    }
  };

  return (
      <Formik
          initialValues={{email: '', password: '', toggle: false}}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
            <Form className="form__wrapper">
              <div className="form__group">
                <h2>LOGIN</h2>
                <label htmlFor="email">Enter email</label>
                <Field className="form__input" type="email" name="email"/>
                <ErrorMessage className="form__input--error" name="email" component="div"/>
                <label htmlFor="password">Enter password</label>
                <Field className="form__input" type="password" name="password"/>
                <ErrorMessage name="password" component="div"/>
                <label className="form__checkbox--label" htmlFor="toggle">
                  <Field type="checkbox" name="toggle"></Field><p className="form__checkbox">Remember me?</p>
                </label>
              </div>
              <button className="form__btn" type="submit" disabled={isSubmitting}>
                Log In
              </button>
            </Form>
        )}
      </Formik>
  );
}

export default LoginForm;

