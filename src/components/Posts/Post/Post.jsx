import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

export default function Post({ currentItems }) {
	return (
		<div className={styles.wrapper}>
			{currentItems &&
				currentItems.map(item => {
					return (
						<div
							className={styles.post}
							key={item.id}>
							<header className={styles.header}>{item.title}</header>
							<p>{item.body}</p>
							<footer className={styles.footer}>
								<h3>{item.id}</h3>
								<Link
									to='/login'
									className={styles.btn}>
									Open
								</Link>
							</footer>
						</div>
					);
				})}
		</div>
	);
}
