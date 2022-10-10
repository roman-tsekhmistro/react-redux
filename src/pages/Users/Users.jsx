import { useDispatch, useSelector } from 'react-redux';
import styles from './users.module.scss';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/thunk/users';
import User from '../../components/User';

export default function Users() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.usersReducer.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className={styles.users}>
			<h1>Users page</h1>
			<ul className={styles.users__list}>
				{!!users.length &&
					users.map(user => (
						<User
							key={user.id}
							data={user}
						/>
					))}
			</ul>
		</div>
	);
}
