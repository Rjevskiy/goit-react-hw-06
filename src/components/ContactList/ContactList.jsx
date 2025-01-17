import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../ContactList/Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter, searchType } = useSelector(state => state.contacts);

  const filteredContacts = contacts.filter((contact) => {
    if (searchType === 'name') {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else if (searchType === 'number') {
      return contact.number.includes(filter);
    }
    return false;
  });

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
