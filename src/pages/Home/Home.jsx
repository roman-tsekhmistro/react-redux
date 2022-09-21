import styles from './Home.module.scss';
import StatisticTable from '../../components/StatisticTable';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBlogs } from '../../redux/actions/asyncAction';
import Posts from '../../components/Posts';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlogs());
	}, [dispatch]);

	return (
		<main className={styles.container}>
			<h1>Hello, dear User 👋🏼,</h1>
			<StatisticTable />
			<Posts />
		</main>
	);
}
