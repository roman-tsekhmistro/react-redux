import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import PostsWithPagination from '../PostsWithPagination';

export default function Posts() {
	const { posts } = useSelector(state => state.postsReducer);

	return (
		<div className={styles.wrapper}>
			<PostsWithPagination
				itemsPerPage={6}
				posts={posts}
			/>
		</div>
	);
}
