import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Sorry, page not found!</h3>
      <Link className={s.link} to="/">
        To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
