import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PostsWithPagination.module.scss';
import Post from '../Post';
import { fetchPosts } from '../../redux/thunk/postsThunk';
import Pagination from '../Pagination';

export default function PostsWithPagination() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<h2>Blog</h2>
			<Post />
			<Pagination />
		</div>
	);
}
