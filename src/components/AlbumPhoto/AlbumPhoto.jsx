import styles from './AlbumPhoto.module.scss';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import { useState } from 'react';

export default function AlbumPhoto({ title, previewImage, fullSizeImage, id }) {
	const [deleteModalActive, setDeleteModalActive] = useState(false);

	return (
		<li
			className={styles.container}
			key={id}>
			<img
				className={styles.preview__img}
				src={previewImage}
				alt='Pict for preview'
			/>
			<h4 className={styles.photo__title}>{title}</h4>
			<a
				target='_blank'
				rel='noreferrer'
				className={styles.link}
				href={`${fullSizeImage}`}>
				Watch full size
			</a>
			<button
				className={styles.btn}
				onClick={() => setDeleteModalActive(true)}>
				Delete image
			</button>
			<DeleteModal
				active={deleteModalActive}
				setActive={setDeleteModalActive}
				photoId={id}
			/>
		</li>
	);
}
