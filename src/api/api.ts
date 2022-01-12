import axios from "axios";
import { Contact } from "../redux/reducers/contactsReducer/contactsReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:8080`,
});

export const api = {
  login(login: string, password: string) {
    return instance.get(`/auth?login=${login}&password=${password}`);
  },
  getContacts(userId: number) {
    return instance.get(`/contacts?userId=${userId}`);
  },
  addContact(payload: Contact) {
    return instance.post(`/contacts`, payload);
  },
  editContact(id: number, payload: Contact) {
    return instance.put(`/contacts/${id}`, payload);
  },
};
