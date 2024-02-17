// * Base
import RegistrationForm from '../../components/Registration-form/Registration-form';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// * Styles
import styles from './Registration.module.css';

function Registration() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <RegistrationForm />
      </div>
      <Footer />
    </>
  );
}

export default Registration;
