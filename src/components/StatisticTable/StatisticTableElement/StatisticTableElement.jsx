import styles from '../StatisticTable.module.scss';

const classNames = require('classnames');

export default function StatisticTableElement(props) {
	const { icon, heading, number, description, hasBorder = true } = props;

	return (
		<div className={classNames(styles.statistic__block, { [styles.hasBorder]: hasBorder })}>
			<img
				className={styles.statistic__icon}
				src={icon}
				alt='Icon for statistic table'
			/>
			<div className={styles.statistic__info}>
				<h4 className={styles.statistic__heading}>{heading}</h4>
				<p className={styles.statistic__number}>{number}</p>
				<div className={styles.statistic__description}>{description}</div>
			</div>
		</div>
	);
}
