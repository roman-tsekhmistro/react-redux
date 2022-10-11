import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../../redux/thunk/users';
import styles from './singleUser.module.scss';
import man1 from '../../assets/images/UsersPhoto/man1.jpg';
import man2 from '../../assets/images/UsersPhoto/man2.jpg';
import man3 from '../../assets/images/UsersPhoto/man3.jpg';
import man4 from '../../assets/images/UsersPhoto/man4.jpg';
import man5 from '../../assets/images/UsersPhoto/man5.jpg';
import woman1 from '../../assets/images/UsersPhoto/woman1.jpg';
import woman2 from '../../assets/images/UsersPhoto/woman2.jpg';
import woman3 from '../../assets/images/UsersPhoto/woman3.jpg';
import woman4 from '../../assets/images/UsersPhoto/woman4.jpg';
import woman5 from '../../assets/images/UsersPhoto/woman5.jpg';

export default function SingleUser() {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.usersReducer.user);
	const imagesArray = [man1, man2, man3, man4, man5, woman1, woman2, woman3, woman4, woman5];
	const randomImageForCard = imagesArray[Math.floor(Math.random() * imagesArray.length)];

	useEffect(() => {
		dispatch(fetchSingleUser(userId));
	}, [dispatch, userId]);

	return currentUser ? (
		<div className={styles.main}>
			<div className={styles.user__wrapper}>
				<div className={styles.user__bio}>
					<h3>Main bio:</h3>
					<ul className={styles.info__wrapper}>
						<li>Name: {currentUser.name}</li>
						<li>Username: {currentUser.username}</li>
						<li>
							E-mail:
							<a
								className={styles.link}
								href={`mailto:${currentUser.email}`}>
								{currentUser.email}
							</a>
						</li>
						<li>
							Phone:
							<a
								className={styles.link}
								href={`tel:${currentUser.phone}`}>
								{currentUser.phone}
							</a>
						</li>
						<li>
							Web-site:
							<a
								className={styles.link}
								target={'_blank'}
								rel='noreferrer'
								href={`https://www.${currentUser.website}`}>
								{currentUser.website}
							</a>
						</li>
					</ul>
					<h3>Company info:</h3>
					<ul className={styles.info__wrapper}>
						<li>Name: {currentUser?.company?.name}</li>
						<li>Business: {currentUser?.company?.bs}</li>
						<li>Catch phrase: {currentUser?.company?.catchPhrase}</li>
					</ul>
					<h3>Address:</h3>
					<p className={styles.info__wrapper}>
						{currentUser?.address?.zipcode} {currentUser?.address?.city}, street {currentUser?.address?.street}, {currentUser?.address?.suite}
					</p>
				</div>
				<img
					src={randomImageForCard}
					alt='Pict for profile'
					className={styles.user__img}
				/>
			</div>
			<Link
				className={styles.btn}
				to={'/users'}>
				Back to users
			</Link>
		</div>
	) : (
		<h2>LOADING</h2>
	);
}
