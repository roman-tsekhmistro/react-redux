import styles from './Blog.module.scss';
import Post from '../../components/common/Post';
import Pagination from '../../components/common/Pagination';
import { useEffect } from 'react';
import { fetchPosts } from '../../redux/thunk/posts';
import { useDispatch, useSelector } from 'react-redux';

export default function Blog() {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.postsReducer.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<main className={styles.blog}>
			<h2>Blog</h2>
			<ul className={styles.posts}>
				{posts.map(item => {
					const { id, title, body } = item;

					return (
						<Post
							id={id}
							title={title}
							body={body}
						/>
					);
				})}
			</ul>
			<Pagination />
		</main>
	);
}
