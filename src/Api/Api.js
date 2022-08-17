import axios from 'axios';

export const getContactsApi = async () => {
  const response = await axios.get(
    'https://62fbaa71e4bcaf53518aa783.mockapi.io/contacts'
  );
  // return response.data;
  console.log('🚀 ~ get', response.data);
};

export const addContactsApi = async contact => {
  const response = await axios.post(
    'https://62fbaa71e4bcaf53518aa783.mockapi.io/contacts',
    contact
  );
  // return response.data;
  console.log('🚀 ~ post', response.data.name);
};

export const removeContactsApi = async id => {
  await axios.delete(
    `https://62fbaa71e4bcaf53518aa783.mockapi.io/contacts/contacts/${id}`
  );
  return id;
};
