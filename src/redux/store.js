import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { modalSlice } from './contacts/modalSlice';

export const store = configureStore({
  reducer: {
    contactsState: contactsSlice.reducer,
    modalState: modalSlice.reducer,
  },
});
