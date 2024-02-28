// * Base
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

// * Styles
import styles from './Registration.module.css';

function Registration() {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <RegistrationForm />
        </div>
      </main>
    </>
  );
}

export default Registration;
