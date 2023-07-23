import RegisterForm from 'components/RegisterForm/RegisterForm';

import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={s.wrapper}>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
