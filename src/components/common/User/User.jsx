import styles from './user.module.scss';
import man1 from '../../../assets/images/UsersPhoto/man1.jpg';
import { Link } from 'react-router-dom';
import man2 from '../../../assets/images/UsersPhoto/man2.jpg';
import man3 from '../../../assets/images/UsersPhoto/man3.jpg';
import man4 from '../../../assets/images/UsersPhoto/man4.jpg';
import man5 from '../../../assets/images/UsersPhoto/man5.jpg';
import woman1 from '../../../assets/images/UsersPhoto/woman1.jpg';
import woman2 from '../../../assets/images/UsersPhoto/woman2.jpg';
import woman3 from '../../../assets/images/UsersPhoto/woman3.jpg';
import woman4 from '../../../assets/images/UsersPhoto/woman4.jpg';
import woman5 from '../../../assets/images/UsersPhoto/woman5.jpg';

export default function User({ data }) {
	const { id, name, username, email, phone, website, company } = data;
	const imagesArray = [man1, man2, man3, man4, man5, woman1, woman2, woman3, woman4, woman5];
	const randomImageForCard = imagesArray[Math.floor(Math.random() * imagesArray.length)];

	return (
		<li
			className={styles.card}
			key={id}>
			<img
				src={randomImageForCard}
				alt='Profile card img'
			/>
			<div className={styles.info__wrapper}>
				<p className={styles.name}>
					{name}
					<span className={styles.username}>({username})</span>
				</p>

				<p className={styles.company__name}>
					Company: <br />
					{company.name}
				</p>
				<p className={styles.email}>
					E-mail: <br />
					{email}
				</p>
				<p className={styles.phone}>
					Number: <br /> {phone}
				</p>
				<p className={styles.site}>
					Site: <br />
					{website}
				</p>
			</div>
			<Link
				to={`${id}`}
				className={styles.btn}>
				More info
			</Link>
		</li>
	);
}
