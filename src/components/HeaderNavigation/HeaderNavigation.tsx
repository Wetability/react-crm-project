// * Base
import { Link } from 'react-router-dom';
import list from '../../data/navigation.data';

// * Style
import styles from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
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
  );
}

export default HeaderNavigation;