import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: '',
  },
});
