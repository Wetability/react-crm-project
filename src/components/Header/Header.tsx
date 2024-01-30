// * Base
import HeaderNavigation from '../Header-navigation/Header-navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

// * Styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderNavigation />
        <Logo />
        <Link to="/registration" className={styles.login} title="Log in">
          <span>Sign in</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
