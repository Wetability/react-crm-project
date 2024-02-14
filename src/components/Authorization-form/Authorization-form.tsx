/* eslint-disable @typescript-eslint/no-explicit-any */
// * Base
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// * Styles
import styles from './Authorization-form.module.css';

const initialValues = {
  password: '',
  email: '',
};

function AuthorizationForm() {
  const navigate = useNavigate();

  const onSubmit = (
    values: any,
    { setSubmitting, resetForm, setErrors }: any
  ) => {
    axios
      .post('http://localhost:3000/users/authorization', values, {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        resetForm(initialValues);
        navigate('/');
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          return alert('Authorization issues, please try again later!');
        }

        setErrors(response.data);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <label className={styles.group}>
            <span className={styles.title}>Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={styles.item}
            />
            <span className={styles.warning}>
              {errors.email && touched.email && errors.email}
            </span>
          </label>

          <label className={styles.group}>
            <span className={styles.title}>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={styles.item}
            />
            <span className={styles.warning}>
              {errors.password && touched.password && errors.password}
            </span>
          </label>

          <button
            className={styles.submit}
            type="submit"
            disabled={isSubmitting}
          >
            <span>Sign Up</span>
          </button>
        </form>
      )}
    </Formik>
  );
}

export default AuthorizationForm;
