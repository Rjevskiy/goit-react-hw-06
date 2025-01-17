import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
  searchType: 'name', // 'name' или 'number'
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearchType(state, action) {
      state.searchType = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setSearchType } = contactsSlice.actions;
export default contactsSlice.reducer;
