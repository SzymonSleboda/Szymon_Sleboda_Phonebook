import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item} key={id}>
      {name}: &nbsp;{number}
      <button className={s.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;