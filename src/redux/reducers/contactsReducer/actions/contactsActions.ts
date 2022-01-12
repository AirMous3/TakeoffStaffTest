import { SET_CONTACTS } from "../constants/contactsReducerConstants";
import { Contact } from "../contactsReducer";

export const setContacts = (contacts: Contact[]) =>
  ({ type: SET_CONTACTS, contacts } as const);
