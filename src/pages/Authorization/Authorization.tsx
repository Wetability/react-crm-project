// * Base
import AuthorizationForm from '../../components/Authorization-form/Authorization-form';
import Header from '../../components/Header/Header';

// * Styles
import styles from './Authorization.module.css';

function Authorization() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AuthorizationForm />
      </div>
    </>
  );
}

export default Authorization;
