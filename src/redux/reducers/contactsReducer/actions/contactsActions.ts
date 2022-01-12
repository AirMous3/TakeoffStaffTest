import {
  ADD_CONTACT,
  SET_CONTACTS,
} from "../constants/contactsReducerConstants";
import { Contact } from "../contactsReducer";

export const setContacts = (contacts: Contact[]) =>
  ({ type: SET_CONTACTS, contacts } as const);
export const addContact = (payload: Contact) =>
  ({ type: ADD_CONTACT, payload } as const);
