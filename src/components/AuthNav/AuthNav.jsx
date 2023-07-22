import { NavLink } from 'react-router-dom';

import s from '../AppBar/AppBar.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={s.link}>
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
