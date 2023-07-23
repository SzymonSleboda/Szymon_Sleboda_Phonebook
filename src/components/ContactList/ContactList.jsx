import { useSelector } from 'react-redux';

import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contactsSelectors';

import { useFetchContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/contactsSelectors';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data: contacts, isLoading, error } = useFetchContactsQuery();
  return (
    <>
      {isLoading && <p className={s.default}>...loading</p>}
      {error && (
        <p className={s.default}>
          Sorry, something went wrong, please try again later!
        </p>
      )}
      {contacts && contacts.length === 0 && <p>There is no contact!</p>}
      <ul className={s.contactList}>
        {contacts &&
          getFilteredContacts(contacts, filter).map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};
 export default ContactList;