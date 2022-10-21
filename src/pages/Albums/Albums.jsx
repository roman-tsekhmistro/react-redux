import Album from '../../components/common/Album';
import { fetchAlbums } from '../../redux/thunk/albums';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './albums.module.scss';

export const Albums = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAlbums());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<h2>Albums</h2>
			<ul className={styles.albums__list}>
				<Album />
			</ul>
		</div>
	);
};
