// * Base
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// * Styles
import styles from './Registration.module.css';

function Registration() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Registration;
