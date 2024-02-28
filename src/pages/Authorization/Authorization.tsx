// * Base
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';

// * Styles
import styles from './Authorization.module.css';

function Authorization() {
  return (
    <>
      <div className={styles.wrapper}>
        <AuthorizationForm />
      </div>
    </>
  );
}

export default Authorization;
