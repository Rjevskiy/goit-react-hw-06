import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;

