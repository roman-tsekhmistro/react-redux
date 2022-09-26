import { useSelector } from 'react-redux';
import styles from './postComment.module.scss';

export default function PostComment() {
	const comments = useSelector(state => state.singlePostReducer.comments);

	const commentary = [
		comments.map(comment => {
			const { email, name, body } = comment;
			return (
				<li
					className={styles.list__item}
					key={body}>
					<div className={styles.personal__info__wrapper}>
						<div className={styles.name}>{name}</div>
						<div className={styles.email}>{email}</div>
					</div>
					<div className={styles.body}>{body}</div>
				</li>
			);
		}),
	];

	return (
		<>
			<h2 className={styles.heading}>Comments</h2>
			<ul className={styles.comments__list}>{commentary}</ul>
		</>
	);
}
