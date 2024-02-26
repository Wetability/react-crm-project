// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// * Base
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products.data';

// * Styles
import styles from './ProductDetail.module.css';
import { useState } from 'react';

interface Product {
  id: number;
  path: string;
  title: string;
  price: number;
  oldPrice?: number;
}

function ProductDetail() {
  const { productId } = useParams();
  const [count, setCount] = useState(1);

  const product = products.find((item) => item.id === Number(productId));

  const otherProducts: Product[] = products
    .filter((item) => item.id !== Number(productId))
    .slice(0, 5);

  if (!product) {
    return (
      <h2 className={styles.mainTitle} style={{ marginTop: '130px' }}>
        Product not found
      </h2>
    );
  }

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1);
  };

  return (
    <section className={styles.product} style={{ marginTop: '125px' }}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>{product.title.toUpperCase()}</h2>
        <div className={styles.group}>
          <div className={styles.imageCard}>
            <img
              src={product.path}
              alt={product.title}
              className={styles.image}
            />
          </div>
          <div className={styles.priceCard}>
            {product.oldPrice ? (
              <div className={styles.prices}>
                <span className={styles.price}>{`$${product.price}`}</span>
                <span
                  className={styles.discount}
                >{`$${product.oldPrice}`}</span>
              </div>
            ) : (
              <div className={styles.prices}>
                <span className={styles.price}>{`$${product.price}`}</span>
              </div>
            )}
            <div className={styles.counterContainer}>
              <button className={styles.button} onClick={decrement}>
                <span>-</span>
              </button>
              <span className={styles.count}>{count}</span>
              <button className={styles.button} onClick={increment}>
                <span>+</span>
              </button>
            </div>
            <button type="button" className={styles.buy}>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <h3 className={styles.subTitle}>Description</h3>
        <div className={styles.descriptionCard}>
          <li className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </li>
          <li className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </li>
          <li className={styles.description}>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </li>
        </div>
        <h3 className={styles.otherProducts}>Other Products</h3>
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          loop={true}
          className={styles.swiper}
        >
          {otherProducts.map((item, index) => {
            return (
              <SwiperSlide key={item.id || index} className={styles.slide}>
                <Link className={styles.card} to={`/menu/${item.id}`}>
                  {item.path && (
                    <div className={styles.cardImg}>
                      <img
                        src={item.path}
                        alt={item.title}
                        className={styles.cardImage}
                      />
                    </div>
                  )}
                  <h3 className={styles.productTitle}>{item.title}</h3>
                  {item.oldPrice ? (
                    <div className={styles.cardGroup}>
                      <span
                        className={styles.cardPrice}
                      >{`$${item.price}`}</span>
                      <span
                        className={styles.discount}
                      >{`$${item.oldPrice}`}</span>
                    </div>
                  ) : (
                    <div className={styles.cardGroup}>
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

export default ProductDetail;
