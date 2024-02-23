// * Base
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';
import Footer from '../../components/Footer/Footer';
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
      <Footer />
    </>
  );
}

export default Authorization;
