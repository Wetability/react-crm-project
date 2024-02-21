// * Base
import { Link } from 'react-router-dom';
import list from './Footer.data';

// * Styles
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
          <span className={styles.title}>CoffeMeet</span>
        </div>
        <nav className={styles.list}>
          {list.map((item, index) => {
            return (
              <Link
                key={'list item - ' + item + index}
                to={item.link}
                className={styles.item}
                title={item.hover}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
