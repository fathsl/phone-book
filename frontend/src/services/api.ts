import axios from 'axios';

const API_URL = '/api/contacts';

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getContact = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createContact = async (contact: any) => {
  const response = await axios.post(API_URL, contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updateContact = async (id: number, contact: any) => {
  const response = await axios.put(`${API_URL}/${id}`, contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteContact = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};