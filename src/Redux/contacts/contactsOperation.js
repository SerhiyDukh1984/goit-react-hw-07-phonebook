import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactsApi, removeContactsApi } from 'Api/Api';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (param, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (contact, rejectWithValue) => {
    try {
      const newContact = await addContactsApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'id',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
