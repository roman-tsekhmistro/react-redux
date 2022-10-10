import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './album.module.scss';

export default function Album() {
	const albums = useSelector(state => state.albumsReducer.albums);

	return albums.map(album => {
		return (
			<div className={styles.wrapper}>
				<Link
					className={styles.title}
					to={`${album.id}`}>
					{album.title}
				</Link>
			</div>
		);
	});
}
