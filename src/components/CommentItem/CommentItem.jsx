import styles from '../Comments/comments.module.scss';
import trash from '../../assets/images/trash.png';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import { useState } from 'react';

export default function CommentItem({ name, email, body, id }) {
	const [deleteModalActive, setDeleteModalActive] = useState(false);

	return (
		<li
			className={styles.list__item}
			key={id}
			id={id}>
			<div className={styles.personal__info__wrapper}>
				<div className={styles.name}>{name}</div>
				<div className={styles.email}>{email}</div>
			</div>
			<div className={styles.body}>{body}</div>
			<button
				className={styles.trash}
				onClick={() => setDeleteModalActive(true)}>
				<img
					src={trash}
					alt='trash icon'
				/>
			</button>
			<DeleteModal
				active={deleteModalActive}
				setActive={setDeleteModalActive}
				parentId={id}
			/>
		</li>
	);
}
