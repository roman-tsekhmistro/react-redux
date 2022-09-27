import { useDispatch } from 'react-redux';
import styles from './users.module.scss';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/thunk/usersThunk';
import User from '../../components/User';

export default function Users() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className={styles.users}>
			<h1>Users page</h1>
			<ul className={styles.users__list}>
				<User />
			</ul>
		</div>
	);
}
