import MajorIcon from '../../../assets/images/todo/major.png';
import NormalIcon from '../../../assets/images/todo/normal.png';
import MinorIcon from '../../../assets/images/todo/minor.png';
import styles from './ToDoTask.module.scss';
import { useState } from 'react';
import DeleteModal from '../../../utilities/DeleteModal/DeleteModal';
import { useDispatch } from 'react-redux';
import { addPerformedTask } from '../../../redux/toDo/action';
import classNames from 'classnames';
import EditModal from '../../../utilities/EditModal';

export default function ToDoTask({ task, prior, id, performed }) {
	const [editModalActive, setEditModalActive] = useState(false);
	const [deleteModalActive, setDeleteModalActive] = useState(false);
	const dispatch = useDispatch();

	const iconDictionary = {
		normal: NormalIcon,
		major: MajorIcon,
		minor: MinorIcon,
	};

	return (
		<div
			className={classNames(styles.to__do__task, { [styles.performed__task]: performed })}
			id={id}
			key={id}>
			<div className={styles.task}>
				<input
					className={styles.checkbox}
					type='checkbox'
					id='checkbox'
					onChange={() => dispatch(addPerformedTask(id))}
				/>
				<h3 className={styles.task__body}>{task}</h3>
				<button
					className={styles.edit__btn}
					onClick={() => setEditModalActive(true)}>
					🖊️
				</button>
			</div>
			<div className={styles.task__prior}>
				<img
					className={styles.prior__img}
					src={iconDictionary[prior]}
					alt='no priority'
				/>
				{prior}
				<button
					onClick={() => setDeleteModalActive(true)}
					className={classNames(styles.btn, { [styles.btn__disabled]: performed })}
					disabled={performed}>
					DELETE
				</button>
				<DeleteModal
					active={deleteModalActive}
					setActive={setDeleteModalActive}
					taskId={id}
				/>
				<EditModal
					active={editModalActive}
					setActive={setEditModalActive}
					taskBody={task}
					taskId={id}
				/>
			</div>
		</div>
	);
}
