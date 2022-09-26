import classNames from 'classnames';
import styles from '../Sidebar.module.scss';
import { Link } from 'react-router-dom';

export default function NavItem({ linkTo, icon, isLogo = false, isActive, text }) {
	return (
		<Link
			className={classNames(styles.nav__item, { [styles.active]: isActive }, { [styles.logo]: isLogo })}
			to={linkTo}>
			<img
				src={icon}
				alt=''
			/>
			{text}
		</Link>
	);
}
