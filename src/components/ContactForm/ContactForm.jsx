import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) {
      alert('Please fill out all fields.');
      return;
    }

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="number" placeholder="Number" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;




