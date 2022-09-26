import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './Sidebar.module.scss';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/login/actions';
import HomeIcon from '../../assets/images/Sidebar/dashboard-icon.svg';
import UsersIcon from '../../assets/images/Sidebar/users-icon.svg';
import DashboardIcon from '../../assets/images/Sidebar/dashboard-icon.svg';
import NavItem from './NavItem/NavItem';

const DASHBOARD_ROUTE = '/';
const BLOG_ROUTE = '/blog';
const LOGIN_ROUTE = '/login';
const USERS_ROUTE = '/users';

export default function Sidebar() {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const handleClickForLogOutBtn = () => {
		dispatch(logOut());
		navigation(LOGIN_ROUTE);
	};
	return (
		<aside className={styles.container}>
			<NavItem
				linkTo={DASHBOARD_ROUTE}
				icon={logo}
				isLogo={true}></NavItem>
			<nav className={styles.navigation}>
				<NavItem
					linkTo={DASHBOARD_ROUTE}
					icon={DashboardIcon}
					text='Dashboard'
					isActive={pathname === DASHBOARD_ROUTE}></NavItem>
				<NavItem
					linkTo={BLOG_ROUTE}
					icon={HomeIcon}
					isActive={pathname === BLOG_ROUTE}
					text='Blog'></NavItem>
				<NavItem
					linkTo={USERS_ROUTE}
					icon={UsersIcon}
					text='Users'
					isActive={pathname === USERS_ROUTE}></NavItem>
			</nav>

			<button onClick={handleClickForLogOutBtn}>LOG OUT</button>
		</aside>
	);
}
