export const getFilteredContacts = state => {
    const { contacts, filter } = state;
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter)
    );
  };