// * Base
import { Link } from 'react-router-dom';
import products from '../../data/products.data';

// * Styles
import styles from './MenuCatalog.module.css';

function MenuCatalog() {
  return (
    <section className={styles.menu}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Menu</h2>
        <div className={styles.container}>
          {products.map((item, index) => {
            return (
              <Link
                className={styles.card}
                key={item.id || index}
                to={`/menu/${item.id}`}
              >
                {item.path && (
                  <div className={styles.img}>
                    <img
                      src={item.path}
                      alt={item.title}
                      className={styles.image}
                    />
                  </div>
                )}
                <h3 className={styles.title}>{item.title}</h3>
                {item.oldPrice ? (
                  <div className={styles.group}>
                    <span className={styles.price}>{`$${item.price}`}</span>
                    <span
                      className={styles.discount}
                    >{`$${item.oldPrice}`}</span>
                  </div>
                ) : (
                  <div className={styles.group}>
                    <span className={styles.price}>{`$${item.price}`}</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuCatalog;
