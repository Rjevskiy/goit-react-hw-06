import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Массив для хранения контактов
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Добавление нового контакта
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    // Удаление контакта по id
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

