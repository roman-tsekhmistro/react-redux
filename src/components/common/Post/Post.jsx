import styles from './Post.module.scss';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/PostRandomImages/wallhaven-4o17g5.jpg';
import image2 from '../../../assets/images/PostRandomImages/wallhaven-2kk589.jpg';
import image3 from '../../../assets/images/PostRandomImages/wallhaven-42qxzy.jpg';
import image4 from '../../../assets/images/PostRandomImages/wallhaven-96g9kx.jpg';
import image5 from '../../../assets/images/PostRandomImages/wallhaven-572zv7.jpg';
import image6 from '../../../assets/images/PostRandomImages/wallhaven-g79rpl.jpg';
import image7 from '../../../assets/images/PostRandomImages/wallhaven-k7dpyq.jpg';
import image8 from '../../../assets/images/PostRandomImages/wallhaven-lq6xj2.jpg';
import image9 from '../../../assets/images/PostRandomImages/wallhaven-yjqe2x (2).jpg';
import image10 from '../../../assets/images/PostRandomImages/wallhaven-nzvlmy.jpg';
import classNames from 'classnames';

export default function Post({ id, title, body, btnSize = 'small' }) {
	const arrWithImagesForHeader = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
	const randomImageForHeader = arrWithImagesForHeader[Math.floor(Math.random() * arrWithImagesForHeader.length)];

	return (
		<li
			className={styles.post}
			key={id}>
			<img
				className={styles.image}
				src={randomImageForHeader}
				alt='Pict for header'
			/>
			<div className={styles.info}>
				<header className={styles.header}>{title}</header>
				<p className={styles.text}>{body}</p>
				<Link
					to={`${id}`}
					className={classNames(styles.btn, { [styles.small]: btnSize })}>
					READ
				</Link>
			</div>
		</li>
	);
}
