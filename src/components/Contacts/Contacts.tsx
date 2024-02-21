/// <reference types="vite-plugin-svgr/client" />

// * Base
import GoogleMap from '../Map/Map';

// * Styles
import styles from './Contacts.module.css';

// * Icons
import LocationIcon from '../../assets/location.svg?react';
import Drawer from '../../assets/drawer.svg?react';
import Phone from '../../assets/phone.svg?react';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.card}>
          <div className={styles.group}>
            <LocationIcon className={styles.icons} />
            <a
              href="https://maps.app.goo.gl/g417CqFASS6GyRSn7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.text}
            >
              Sokolská 1872/14
            </a>
          </div>
          <div className={styles.group}>
            <Phone className={styles.icons} />
            <a href="tel:+371000000" className={styles.text}>
              +371000000
            </a>
          </div>
          <div className={styles.group}>
            <Drawer className={styles.icons} />
            <a href="mailto:coffemeet@service.com" className={styles.text}>
              coffemeet@service.com
            </a>
          </div>
        </div>
        <GoogleMap />
      </div>
    </section>
  );
}

export default Contacts;
