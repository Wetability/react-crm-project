// * Base
import { Link } from 'react-router-dom';

// * Style
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" title="Logo" className={styles.logo}>
      <img src="../../../public/Logo.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
