import styles from './deleteModal.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { fetchCommentsAfterDelete } from '../../../redux/thunk/singlePostAndComments';
import { fetchPhotosAfterDelete } from '../../../redux/thunk/albums';

export default function DeleteModal({ active, setActive, commentId, photoId }) {
	const dispatch = useDispatch();

	const whereModalUsed = () => {
		if (photoId !== undefined) {
			removePhoto();
		}
		if (commentId !== undefined) {
			removeComment();
		}
	};

	const removeComment = () => {
		dispatch(fetchCommentsAfterDelete(commentId));
	};

	const removePhoto = () => {
		dispatch(fetchPhotosAfterDelete(photoId));
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
						onClick={whereModalUsed}>
						YES
					</button>
					<button className={classNames(styles.btn, styles.btn__cancel)}>NO</button>
				</footer>
			</div>
		</div>
	);
}
