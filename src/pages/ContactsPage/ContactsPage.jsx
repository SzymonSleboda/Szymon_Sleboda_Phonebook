import { useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { getIsLoggedIn } from 'redux/contactsSelectors';

import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    isLoggedIn && (
      <div className={s.wrapper}>
        <h1 className={s.titlePhone}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.titleCont}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  );
};
export default ContactsPage;
