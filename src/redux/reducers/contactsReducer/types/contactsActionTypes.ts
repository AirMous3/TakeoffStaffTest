import {
  addContact,
  editContact,
  setContacts,
} from "../actions/contactsActions";

export type contactsActionTypes =
  | ReturnType<typeof setContacts>
  | ReturnType<typeof addContact>
  | ReturnType<typeof editContact>;
