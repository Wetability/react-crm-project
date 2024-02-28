// * Base
import { useEffect, useState } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';

// * Styles
import styles from './Header.module.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.list}>
          <NavigationItems />
        </nav>
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
