// * Base
import { useEffect, useState } from 'react';
import HeaderNavigation from '../Header-navigation/Header-navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

// * Styles
import styles from './Header.module.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderNavigation />
        <Logo />
        {isLoggedIn ? (
          <div className={styles.group}>
            <button className={styles.authorization} onClick={handleLogout}>
              <span>Log out</span>
            </button>
          </div>
        ) : (
          <div className={styles.group}>
            <Link
              to="/authorization"
              className={styles.authorization}
              title="Log in"
            >
              <span>Log in</span>
            </Link>
            <Link
              to="/registration"
              className={styles.registration}
              title="Registration"
            >
              <span>Sign up</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
