import { createSlice } from '@reduxjs/toolkit';
import { closeEditForm } from './modalSlice';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  contactId: 0,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // -----------------DELETE----------
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // ----------------EDIT-----------------
    [editContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [editContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1, action.payload);
      // console.log(index);
      // state.contacts.items = state.contacts.items.filter(
      //   contact => contact.id !== action.payload.id
      // );
    },
    [editContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // ---------------ADD------------------
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});
export const { setFilter, setContactId } = contactsSlice.actions;
