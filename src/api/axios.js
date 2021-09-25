import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postSingleContact = async (contact) => {
  const { data } = await axios.post('/contacts/', contact);
  return data;
};

export const removeSingleContact = async (id) => {
  const { data } = await axios.delete('/contacts/' + id);
  return data;
};
