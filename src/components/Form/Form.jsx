import React from 'react';
import './Form.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './Form.module.scss';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/actions';

export default function LoginForm() {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Required'),
	});

	function setToken() {
		const token = 'hj124iak';
		localStorage.setItem('TOKEN', token);
		return token;
	}

	const handleSubmit = () => {
		dispatch(logIn(setToken()));
		navigation('/');
	};

	return (
		<Formik
			initialValues={{ email: '', password: '', toggle: false }}
			validationSchema={SignupSchema}
			onSubmit={handleSubmit}>
			{() => (
				<Form className={styles.form__wrapper}>
					<div className={styles.form__group}>
						<h2>LOGIN</h2>
						<label htmlFor='email'>Enter email</label>
						<Field
							className={styles.form__input}
							type='email'
							name='email'
						/>
						<ErrorMessage
							className={styles.form__input__error}
							name='email'
							component='div'
						/>
						<label htmlFor='password'>Enter password</label>
						<Field
							className={styles.form__input}
							type='password'
							name='password'
						/>
						<ErrorMessage
							className={styles.form__input__error}
							name='password'
							component='div'
						/>
						<label
							className={styles.form__checkbox__label}
							htmlFor='toggle'>
							<Field
								type='checkbox'
								name='toggle'></Field>
							<p className={styles.form__checkbox}>Remember me?</p>
						</label>
					</div>
					<button
						className={styles.form__btn}
						type='submit'>
						Log In
					</button>
				</Form>
			)}
		</Formik>
	);
}
