import classNames from 'classnames';
import styles from './navItem.module.scss';
import { Link } from 'react-router-dom';

export default function NavItem({ linkTo, icon, isLogo = false, isActive, text }) {
	return (
		<Link
			className={classNames(styles.nav__item, { [styles.active]: isActive })}
			to={linkTo}>
			<img
				className={classNames(styles.nav__item__icon, { [styles.logo]: isLogo })}
				src={icon}
				alt='Nav item pict'
			/>
			{text}
		</Link>
	);
}
