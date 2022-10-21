import { useSelector } from 'react-redux';
import ToDoTask from '../common/ToDoTask';
import styles from './ListOfPerformedTasks.module.scss';

export default function ListOfPerformedTasks() {
	const performedTasks = useSelector(state => state.toDoReducer.performedTasks);
	return (
		<ul className={styles.performed__tasks__list}>
			{performedTasks.map(task => {
				return (
					<ToDoTask
						performed={true}
						task={task.task}
						id={task.id}
						prior={task.prior}
						key={task.id}
					/>
				);
			})}
		</ul>
	);
}
