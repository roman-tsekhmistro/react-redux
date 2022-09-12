import './LoginPage.scss';
import LoginPageImage from '../../assets/images/bg-img.png'
import LoginForm from '../../components/Form';

export default function LoginPage () {
  return (
      <div className="login__page--wrapper">
        <img className="bg__image" src={LoginPageImage} alt='Background'></img>
        <div className="login__form__wrapper">
          <LoginForm/>
        </div>
      </div>
  );
};

