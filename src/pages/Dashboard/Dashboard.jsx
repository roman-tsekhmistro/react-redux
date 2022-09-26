import StatisticTable from '../../components/StatisticTable';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
	return (
		<div className={styles.container}>
			<h1>Hello, dear User 👋🏼,</h1>
			<StatisticTable />
		</div>
	);
}
