import classNames from 'classnames';
import styles from './editModal.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function EditModal({ active, setActive, taskBody }) {
	// 	const tasks = useSelector(state => state.toDoReducer.tasks);
	// 	const currentTask = useSelector(state => state.toDoReducer.tasks.find(task => task.id === taskId));
	//
	// 	const changeTask = (id, tasksList, newContent) => {
	// 		currentTask.task = newContent;
	// 		return tasksList;
	// 	};

	return (
		<Formik
			initialValues={{ task: taskBody }}
			onSubmit={(value, { resetForm }) => {
				setActive(false);
				// changeTask(taskId, tasks, value);
				resetForm({ values: '' });
			}}>
			{({ handleSubmit }) => (
				<div className={classNames(styles.modal, { [styles.active]: active })}>
					<Form className={styles.modal__content}>
						<h2>Edit task</h2>
						<button
							type='button'
							onClick={() => setActive(false)}
							className={styles.close__modal}>
							X
						</button>
						<label htmlFor='task'>Task:</label>
						<Field
							className={styles.input}
							type='task'
							name='task'
							defaultValue={taskBody}
						/>
						<ErrorMessage
							className={styles.error}
							name='task'
							component='div'
						/>
						<button
							onClick={handleSubmit}
							className={styles.btn}
							type='submit'>
							Save
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
}
