import { addContact, setContacts } from "../actions/contactsActions";

export type contactsActionTypes =
  | ReturnType<typeof setContacts>
  | ReturnType<typeof addContact>;
