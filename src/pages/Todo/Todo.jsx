import styles from './Todo.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addTaskInTaskList } from '../../redux/toDo/action';
import * as Yup from 'yup';
import TasksList from '../../components/TaskLists';
import ListOfPerformedTasks from '../../components/ListOfPerformedTasks';

const CheckToDoTaskField = Yup.object().shape({
	task: Yup.string().min(2, 'Too short!').max(30, 'Too long!').required('Required'),
	prior: Yup.string().oneOf(['major', 'normal', 'minor']).nullable().required('Required'),
});

export default function Todo() {
	const randomId = () => Math.floor(Math.random() * 30);
	const dispatch = useDispatch();

	return (
		<div className={styles.to__do}>
			<h1>To do</h1>
			<h3 className={styles.subheader}>Add task</h3>
			<Formik
				validationSchema={CheckToDoTaskField}
				initialValues={{ task: '', prior: '' }}
				onSubmit={(values, { resetForm }) => {
					const task = {
						id: randomId(),
						task: values.task,
						prior: values.prior,
					};
					dispatch(addTaskInTaskList(task));
					resetForm({ values: '' });
				}}>
				{({ handleSubmit }) => (
					<Form className={styles.form}>
						<div className={styles.form__item}>
							<label htmlFor='task'>Enter your task:</label>
							<Field
								className={styles.input__item}
								id='task'
								type='task'
								name='task'
								placeholder='Your task'
							/>
							<ErrorMessage
								className={styles.error}
								name='task'
								component='div'
							/>
						</div>
						<div className={styles.form__item}>
							<label htmlFor='prior'>Choose priority:</label>
							<Field
								as='select'
								className={styles.input__item}
								id='prior'
								type='prior'
								name='prior'>
								<option
									value=''
									className={styles.clear__option}
								/>
								<option value='major'>Major</option>
								<option value='normal'>Normal</option>
								<option value='minor'>Minor</option>
							</Field>
							<ErrorMessage
								className={styles.error}
								name='prior'
								component='div'
							/>
						</div>
						<button
							onClick={handleSubmit}
							className={styles.btn}
							type='submit'>
							Add task
						</button>
					</Form>
				)}
			</Formik>
			<div className={styles.subheaders}>
				<h2 className={styles.subheader}>Task list</h2>
				<h2 className={styles.subheader}>Performed tasks</h2>
			</div>
			<div className={styles.lists__tasks}>
				<TasksList />
				<div className={styles.separator} />
				<ListOfPerformedTasks />
			</div>
		</div>
	);
}
