import Sidebar from '../Sidebar';
import styles from './PrivateLayout.module.scss';

export default function PrivateLayout(props) {
	return (
		<div className={styles.private__layout}>
			<Sidebar />
			<div className='app-content'>{props.children}</div>
		</div>
	);
}
