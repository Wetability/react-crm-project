// * Styles
import styles from './Intro.module.css';

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <h1 className={styles.title}>Roasted coffee best choice</h1>
        </div>
        <div className={styles.group}>
          <p className={styles.description}>
            The coffee is brewed by first roasting the green coffee beans over
            hot coals in a brazier. given an opportunity to sample.
          </p>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.gold}>
            <span>Buy now</span>
          </button>
          <button type="button" className={styles.transparent}>
            <span>Read more</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
