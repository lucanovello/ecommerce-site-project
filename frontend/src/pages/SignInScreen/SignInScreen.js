import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import signInScreenStyle from './SignInScreen.module.css';

const SignInScreen = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/signin';

  return (
    <div className={signInScreenStyle.signInScreenContainer}>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <form className={signInScreenStyle.signInContainer}>
        <div className={signInScreenStyle.signInTitle}>Sign In</div>
        <div className={signInScreenStyle.signInEmailContainer}>
          <label
            htmlFor={'email'}
            className={signInScreenStyle.signInEmailLabel}
          >
            Email address
          </label>
          <input
            type={'email'}
            id={'email'}
            className={signInScreenStyle.signInEmailInput}
            required
          />
        </div>
        <div className={signInScreenStyle.signInPasswordContainer}>
          <label
            htmlFor={'password'}
            className={signInScreenStyle.signInPasswordLabel}
          >
            Password
          </label>
          <input
            type={'password'}
            id={'password'}
            className={signInScreenStyle.signInPasswordInput}
            required
          />
        </div>

        <button type="submit" className={signInScreenStyle.signInButton}>
          Sign In
        </button>
      </form>
      <div className={signInScreenStyle.signInCreateNew}>
        {'New customer? '}
        <Link to={`/signup?redirect=${redirect}`}>
          <div className={signInScreenStyle.signInCreateNewLink}>
            {'Create an account'}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignInScreen;
