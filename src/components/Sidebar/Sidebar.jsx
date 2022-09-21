import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './Sidebar.module.scss';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/loginActions';

export default function Sidebar() {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logOut());
		navigation('/login');
	};
	return (
		<aside className={styles.sidebar}>
			<Link to='/'>
				<img
					className={styles.logo}
					src={logo}
					alt='Logo'
				/>
			</Link>
			<nav className={styles.navigation}>
				<Link to='/'>Home</Link>
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/users'>Users</Link>
			</nav>

			<button onClick={handleClick}>LOG OUT</button>
		</aside>
	);
}
