// * Base
import Logo from '../Logo/Logo';
import { memo } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

// * Styles
import styles from './Footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
          <span className={styles.title}>CoffeMeet</span>
        </div>
        <nav className={styles.list}>
          <NavigationItems />
        </nav>
      </div>
    </footer>
  );
});

export default Footer;
