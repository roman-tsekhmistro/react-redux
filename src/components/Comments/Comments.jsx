import { useSelector } from 'react-redux';
import styles from './comments.module.scss';
import { useState } from 'react';
import Modal from '../../utilities/Modal';
import CommentItem from '../common/CommentItem/CommentItem';

export default function Comments() {
	const comments = useSelector(state => state.singlePostReducer.comments);
	const [addModalActive, setAddModalActive] = useState(false);

	const commentary = [
		comments.map(comment => {
			const { email, name, body, id } = comment;
			return (
				<CommentItem
					name={name}
					id={id}
					body={body}
					email={email}
				/>
			);
		}),
	];

	return (
		<>
			<h2 className={styles.heading}>Comments</h2>
			<button
				className={styles.btn}
				onClick={() => setAddModalActive(true)}>
				Add comment
			</button>
			<Modal
				active={addModalActive}
				setActive={setAddModalActive}
			/>

			<ul className={styles.comments__list}>{commentary}</ul>
		</>
	);
}
