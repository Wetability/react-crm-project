// * Base
import AuthorizationForm from '../../components/Authorization-form/Authorization-form';

// * Styles
import styles from './Authorization.module.css';

function Authorization() {
  return (
    <div className={styles.wrapper}>
      <AuthorizationForm />
    </div>
  );
}

export default Authorization;
