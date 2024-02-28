// * Base
import { Link } from 'react-router-dom';
import list from '../../data/navigation.data';

// * Style
import styles from './NavigationItems.module.css';

function HeaderNavigation() {
  return (
    <>
      {list.map((item, index) => (
        <Link
          key={'list item - ' + item + index}
          to={item.link}
          className={styles.item}
          title={item.hover}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default HeaderNavigation;
