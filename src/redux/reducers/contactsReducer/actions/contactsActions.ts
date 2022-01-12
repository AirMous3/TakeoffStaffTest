import {
  ADD_CONTACT,
  EDIT_CONTACT,
  SET_CONTACTS,
} from "../constants/contactsReducerConstants";
import { Contact } from "../contactsReducer";

export const setContacts = (contacts: Contact[]) =>
  ({ type: SET_CONTACTS, contacts } as const);
export const addContact = (payload: Contact) =>
  ({ type: ADD_CONTACT, payload } as const);
export const editContact = (id: number, payload: Contact) =>
  ({ type: EDIT_CONTACT, id, payload } as const);
