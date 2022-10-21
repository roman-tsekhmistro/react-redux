import styles from './TasksList.module.scss';
import ToDoTask from '../common/ToDoTask';
import { useSelector } from 'react-redux';

export default function TasksList() {
	const tasks = useSelector(state => state.toDoReducer.tasks);

	return (
		<ul className={styles.tasks__list}>
			{tasks.map(task => {
				return (
					<ToDoTask
						task={task?.task}
						id={task?.id}
						prior={task?.prior}
						key={task?.id}
						tasks={tasks}
					/>
				);
			})}
		</ul>
	);
}
