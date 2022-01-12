import { Dispatch } from "redux";
import { api } from "../../../../api/api";
import { addContact, setContacts } from "../actions/contactsActions";
import { Contact } from "../contactsReducer";

export const getContacts = (id: number) => async (dispatch: Dispatch) => {
  const res = await api.getContacts(id);
  dispatch(setContacts(res.data));
};

export const addContactThunk =
  (payload: Contact) => async (dispatch: Dispatch) => {
    const res = await api.addContact(payload);
    dispatch(addContact(res.data));
  };
