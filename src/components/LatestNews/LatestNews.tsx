// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// * Base
import news from '../../data/news.data';

// * Styles
import styles from './LatestNews.module.css';

function LatestNews() {
  return (
    <section className={styles.latestNews}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Latest news</h2>
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          loop={true}
          className={styles.swiper}
        >
          {news.map((item, index) => (
            <SwiperSlide key={item.id || index} className={styles.slide}>
              <div className={styles.card}>
                <img src={item.path} alt={item.title} />
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestNews;
