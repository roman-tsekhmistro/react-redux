import styles from './Home.module.scss';
import StatisticTable from '../../components/StatisticTable';

export default function Home() {
	return (
		<main className={styles.container}>
			<h1>Hello, dear User 👋🏼,</h1>
			<StatisticTable />
		</main>
	);
}
