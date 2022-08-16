import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

export const getContactsApi = () => {
  return axios
    .get('https://62fbaa71e4bcaf53518aa783.mockapi.io/contacts')
    .then(data => {
      return data;
    })
    .catch(error => console.log(error));
};

export const addContactsApi = contact => {
  return axios
    .post('/contact.json', contact)

    .then(({ data }) => {
      const id = nanoid();
      return { data };
    });
};

export const removeContactsApi = id => {
  return axios.delete(`/contact/${id}.json`).then(() => id);
};
