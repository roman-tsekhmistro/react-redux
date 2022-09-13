import styles from './StatisticTable.module.scss';
import StatisticTableElement from './StatisticTableElement';
import TotalIcon from '../../assets/images/StatisticTable/icons/total-icon.svg';
import CellDescription from './CellDescription';
import ArrowUp from '../../assets/images/StatisticTable/arrows/arrow-up.svg';
import MembersIcon from '../../assets/images/StatisticTable/icons/members-icon.svg';
import ArrowDown from '../../assets/images/StatisticTable/arrows/arrow-down.svg';
import ActiveIcon from '../../assets/images/StatisticTable/icons/active-icon.svg';

export default function StatisticTable() {
	console.log(styles);
	return (
		<section className={styles.statistic}>
			<StatisticTableElement
				icon={TotalIcon}
				heading='Total Customers'
				number='5,423'
				description={
					<CellDescription
						img={ArrowUp}
						span='16% '
						text='this month'
						classForSpan='green'
					/>
				}
			/>
			<StatisticTableElement
				icon={MembersIcon}
				heading='Members'
				number='1,893'
				description={
					<CellDescription
						img={ArrowDown}
						span='16% '
						text='this month'
						classForSpan='red'
					/>
				}
			/>
			<StatisticTableElement
				icon={ActiveIcon}
				heading='Active Now'
				number='189'
				className='last--block'
				hasBorder={false}
			/>
		</section>
	);
}
