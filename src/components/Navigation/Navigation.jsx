import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contactsSelectors';

import s from '../AppBar/AppBar.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
