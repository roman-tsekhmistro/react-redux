import styles from './deleteModal.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { fetchCommentsAfterDelete } from '../../../redux/thunk/singlePostAndComments';

export default function DeleteModal({ active, setActive, parentId }) {
	const dispatch = useDispatch();

	const removeComment = () => {
		dispatch(fetchCommentsAfterDelete(parentId));
	};

	return (
		<div
			className={classNames(styles.modal, { [styles.active]: active })}
			onClick={() => setActive(false)}>
			<div className={styles.modal__content}>
				<header>
					<h2>Delete comment</h2>
					<button
						type='button'
						onClick={() => setActive(false)}
						className={styles.close__modal}>
						X
					</button>
				</header>
				<p>You sure?</p>
				<footer>
					<button
						className={classNames(styles.btn, styles.btn__confirm)}
						onClick={removeComment}>
						YES
					</button>
					<button className={classNames(styles.btn, styles.btn__cancel)}>NO</button>
				</footer>
			</div>
		</div>
	);
}
