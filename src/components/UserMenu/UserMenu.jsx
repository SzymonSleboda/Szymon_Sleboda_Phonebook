import { useSelector } from 'react-redux';

import { getUserName } from 'redux/contactsSelectors';
import { useLogOutMutation } from 'redux/userApi';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);

  const [logOut] = useLogOutMutation();

  return (
    <div className={s.userMenu__wrapper}>
      <p className={s.userMenu__text}>
        Welcome, <span>{name}</span>!
      </p>
      <button
        className={s.userMenu__btn}
        type="button"
        onClick={() => logOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
