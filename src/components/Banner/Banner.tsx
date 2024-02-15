import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/Banner-image.png" alt="Banner image" />
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Roasted Coffee</h3>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
