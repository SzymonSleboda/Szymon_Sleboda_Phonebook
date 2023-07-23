import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { loginError } from 'utils/notification';
import { useLoginMutation } from 'redux/userApi';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        loginError();
      }
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    login({ email, password });
  };

  return (
    <>
      <ToastContainer autoClose={1500} position="top-center" />
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <button className={s.btn} type="submit" disabled={isLoading}>
          {isLoading && <RotatingLines height="20" width="20" />}
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
