import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contactsSelectors';

import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
