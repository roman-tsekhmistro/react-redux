import styles from './modal.module.scss';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import { addCommentInList } from '../../redux/singlePost/actions';
import { useDispatch } from 'react-redux';

export default function Modal({ active, setActive }) {
	const dispatch = useDispatch();
	const CommentSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		name: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required'),
		text: Yup.string().min(3, 'Too short!').max(100, 'Too long!').required('Required'),
	});
	const randomId = Math.floor(Math.random() * 499);

	return (
		<Formik
			initialValues={{ email: '', text: '', name: '' }}
			validationSchema={CommentSchema}
			onSubmit={(values, { resetForm }) => {
				const comment = {
					id: randomId,
					name: values.name,
					email: values.email,
					body: values.text,
				};
				dispatch(addCommentInList(comment));
				setActive(false);
				resetForm({ values: '' });
			}}>
			{({ handleSubmit }) => (
				<div
					className={classNames(styles.modal, { [styles.active]: active })}
					onClick={() => setActive(false)}>
					<Form
						className={styles.modal__content}
						onClick={handleSubmit}>
						<h2>Add comment</h2>
						<button
							type='button'
							onClick={() => setActive(false)}
							className={styles.close__modal}>
							X
						</button>
						<label htmlFor='name'>Enter your name:</label>
						<Field
							className={styles.input}
							id='name'
							type='name'
							name='name'
							placeholder='Your name'
						/>
						<ErrorMessage
							className={styles.error}
							name='name'
							component='div'
						/>
						<label htmlFor='email'>Enter your email:</label>
						<Field
							className={styles.input}
							id='email'
							type='email'
							name='email'
							placeholder='Your email'
						/>
						<ErrorMessage
							className={styles.error}
							name='email'
							component='div'
						/>
						<label htmlFor='text'>Enter your comment:</label>
						<Field
							className={styles.textarea}
							id='comment'
							type='text'
							name='text'
							component='textarea'
							placeholder='Your comment'
						/>
						<ErrorMessage
							className={styles.error}
							name='text'
							component='div'
						/>
						<button
							className={styles.btn}
							type='submit'>
							Add comment
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
}
