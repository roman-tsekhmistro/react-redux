import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPhotosForTheAlbumId } from '../../redux/thunk/albums';
import AlbumPhoto from '../../components/AlbumPhoto';
import styles from './SingleAlbum.module.scss';

export default function SingleAlbum() {
	const dispatch = useDispatch();
	const { albumId } = useParams();
	const photosForRender = useSelector(state => state.albumsReducer.photosForAlbum);

	useEffect(() => {
		dispatch(fetchPhotosForTheAlbumId(albumId));
	}, [dispatch, albumId]);

	const photos = [
		photosForRender.map(photo => {
			return (
				<AlbumPhoto
					title={photo.title}
					previewImage={photo.thumbnailUrl}
					fullSizeImage={photo.url}
					id={photo.id}
				/>
			);
		}),
	];

	return (
		<div className={styles.container}>
			<h2>Album #{albumId}</h2>
			<ul>{photos}</ul>
			<Link
				className={styles.btn}
				to='/albums'>
				Back to albums
			</Link>
		</div>
	);
}
