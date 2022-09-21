import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './PostsWithPagination.module.scss';
import ReactPaginate from 'react-paginate';
import Post from '../Posts/Post';

export default function PostsWithPagination({ itemsPerPage, posts }) {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const state = useSelector(state => state.postsReducer);
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(state.posts.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(state.posts.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, state.posts]);

	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % state.posts.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Post
				currentItems={currentItems}
				posts={posts}
			/>
			<ReactPaginate
				containerClassName={styles.wrapper}
				breakLabel='...'
				nextLabel='>'
				onPageChange={handlePageClick}
				pageCount={pageCount}
				activeClassName={styles.active__page}
				previousLabel='<'
			/>
		</>
	);
}
