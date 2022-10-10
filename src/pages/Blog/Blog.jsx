import styles from './Blog.module.scss';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import { useEffect } from 'react';
import { fetchPosts } from '../../redux/thunk/posts';
import { useDispatch } from 'react-redux';

export default function Blog() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<main className={styles.container}>
			<h2>Blog</h2>
			<Post />
			<Pagination />
		</main>
	);
}
