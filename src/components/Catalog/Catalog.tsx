// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// * Base
import products from '../../data/products.data';
import { Link } from 'react-router-dom';

// * Styles
import styles from './Catalog.module.css';

function Catalog() {
  return (
    <section className={styles.catalog}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Catalog</h2>
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          loop={true}
          className={styles.swiper}
        >
          {products.map((item, index) => {
            return (
              <SwiperSlide key={item.id || index} className={styles.slide}>
                <Link className={styles.card} to={`/menu/${item.id}`}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Catalog;
