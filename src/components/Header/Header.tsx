// * Base
import HeaderNavigation from '../Header-navigation/Header-navigation';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderNavigation />
        <Logo />
        <button type="button" className={styles.login} title="Log in">
          <span>Sign in</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
