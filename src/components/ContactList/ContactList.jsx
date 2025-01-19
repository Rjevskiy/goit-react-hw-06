import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { createSelector } from '@reduxjs/toolkit';

import "../ContactList/Contact.css";

const selectFilteredContacts = createSelector(
  [state => state.contacts.items, state => state.filters.name],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
);

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact">
      {filteredContacts.map(({ id, name, number }) => (
        <li className="contactLi" key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


