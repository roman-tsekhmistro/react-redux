import styles from '../StatisticTable.module.scss';

const classNames = require('classnames');

export default function StatisticTableElement(props) {
	const { icon, heading, number, description, hasBorder = true } = props;

	return (
		<div className={classNames(styles.statistic__block, { hasBorder: hasBorder })}>
			<img
				className='statistic__icon'
				src={icon}
				alt='Icon for statistic table'
			/>
			<div className='statistic__info'>
				<h4 className='statistic__heading'>{heading}</h4>
				<p className='statistic__number'>{number}</p>
				<div className='statistic__description'>{description}</div>
			</div>
		</div>
	);
}
