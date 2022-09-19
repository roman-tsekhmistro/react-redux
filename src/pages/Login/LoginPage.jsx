import './LoginPage.module.scss';
import LoginPageImage from '../../assets/images/bg-img.png';
import LoginForm from '../../components/Form';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
	return (
		<div className={styles.login__page__wrapper}>
			<img
				className={styles.bg__image}
				src={LoginPageImage}
				alt='Background'></img>
			<div className={styles.login__form__wrapper}>
				<LoginForm />
			</div>
		</div>
	);
}
