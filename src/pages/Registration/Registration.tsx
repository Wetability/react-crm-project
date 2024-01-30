// * Styles
import RegistrationForm from '../../components/Registration-form/Registration-form';
import styles from './Registration.module.css';

function Registration() {
  return (
    <div className={styles.wrapper}>
      <RegistrationForm />
    </div>
  );
}

export default Registration;