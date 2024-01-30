/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from 'formik';
import styles from './Registration-form.module.css';
import axios from 'axios';

const EMAIL_REG_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const initialValues = {
  gender: '',
  password: '',
  confirmPassword: '',
  email: '',
  firstName: '',
  lastName: '',
};

function RegistrationForm() {
  const validation = (values: any) => {
    const errors: any = {};

    // Email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!EMAIL_REG_EXP.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Password
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Min length of password is 8 characters';
    }

    // Confirm password
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // First name
    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    // Last name
    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    return errors;
  };

  const onSubmit = (
    values: any,
    { setSubmitting, resetForm, setErrors }: any
  ) => {
    axios
      .post('http://localhost:3000/users/registration', values)
      .then(() => {
        resetForm(initialValues);
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          return alert('Registration issues, please try again later!');
        }

        setErrors(response.data);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
    >
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
            <span className={styles.title}>First name</span>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className={styles.item}
            />
            <span className={styles.warning}>
              {errors.firstName && touched.firstName && errors.firstName}
            </span>
          </label>

          <label className={styles.group}>
            <span className={styles.title}>Last name</span>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className={styles.item}
            />
            <span className={styles.warning}>
              {errors.lastName && touched.lastName && errors.lastName}
            </span>
          </label>

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

          <label className={styles.group}>
            <span className={styles.title}>Confirm password</span>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              className={styles.item}
            />
            <span className={styles.warning}>
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
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

export default RegistrationForm;
