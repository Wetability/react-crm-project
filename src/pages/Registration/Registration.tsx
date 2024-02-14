// * Base
import RegistrationForm from '../../components/Registration-form/Registration-form';
import Header from '../../components/Header/Header';

// * Styles
import styles from './Registration.module.css';

function Registration() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <RegistrationForm />
      </div>
    </>
  );
}

export default Registration;
