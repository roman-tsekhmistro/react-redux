import StatisticTableElement from './StatisticTableElement';
import TotalIcon from '../../assets/images/StatisticTable/icons/total-icon.svg';
import CellDescription from './StatisticTableElement/CellDescription';
import ArrowUp from '../../assets/images/StatisticTable/arrows/arrow-up.svg';
import MembersIcon from '../../assets/images/StatisticTable/icons/members-icon.svg';
import ArrowDown from '../../assets/images/StatisticTable/arrows/arrow-down.svg';
import ActiveIcon from '../../assets/images/StatisticTable/icons/active-icon.svg';
import RecentUsers from './StatisticTableElement/RecentUsers';
import styles from './StatisticTable.module.scss';

export default function StatisticTable() {
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
					/>
				}
			/>
			<StatisticTableElement
				icon={ActiveIcon}
				heading='Active Now'
				number='189'
				hasBorder={false}
				description={<RecentUsers />}
			/>
		</section>
	);
}
