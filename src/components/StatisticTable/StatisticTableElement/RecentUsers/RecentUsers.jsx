import user1 from '../../../../assets/images/RecentUsers/user1.svg';
import user2 from '../../../../assets/images/RecentUsers/user2.svg';
import user3 from '../../../../assets/images/RecentUsers/user3.svg';
import user4 from '../../../../assets/images/RecentUsers/user4.svg';
import user5 from '../../../../assets/images/RecentUsers/user5.svg';
import styles from './RecentUsers.module.scss';

export default function RecentUsers() {
	const usersArr = [user1, user2, user3, user4, user5];
	const newUsersArr = usersArr.map((item, i) => {
		return (
			<li key={i}>
				<img
					src={item}
					alt='recent user avatar'
				/>
			</li>
		);
	});
	return <ul className={styles.recent__users}>{newUsersArr}</ul>;
}
