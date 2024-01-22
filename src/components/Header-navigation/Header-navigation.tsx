// * Base
import { Link } from 'react-router-dom';

// * Style
import styles from './Header-navigation.module.css';

function HeaderNavigation() {
  return (
    <nav className={styles.list}>
      <Link to="/" className={styles.item} title="Home">
        Home
      </Link>
      <Link to="/about" className={styles.item} title="About us">
        About
      </Link>
      <Link to="/menu" className={styles.item} title="Menu">
        Menu
      </Link>
      <Link to="/news" className={styles.item} title="News">
        News
      </Link>
    </nav>
  );
}

export default HeaderNavigation;
