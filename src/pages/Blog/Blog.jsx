import styles from './Blog.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../../redux/thunk/postsThunk';
import PostsWithPagination from '../../components/PostsWithPagination';

export default function Blog() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<main className={styles.container}>
			<PostsWithPagination itemsPerPage={6} />
		</main>
	);
}
