import styles from './pagination.module.scss';
import { fetchPosts } from '../../../redux/thunk/posts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Pagination() {
	const [activePage, setActivePage] = useState(1);
	const classNames = require('classnames');
	const dispatch = useDispatch();

	const handleNextPagesClick = pageNum => {
		setActivePage(pageNum);
		dispatch(fetchPosts(pageNum * 6 - 6));
	};

	return (
		<div className={styles.footer}>
			{[...Array(10).keys()].map(element => {
				return (
					<button
						className={classNames(styles.btn, {
							[styles.active__item]: activePage === element + 1,
						})}
						key={element + 1}
						onClick={() => {
							handleNextPagesClick(element + 1);
						}}>
						{element + 1}
					</button>
				);
			})}
		</div>
	);
}
