import { Dispatch } from "redux";
import { api } from "../../../../api/api";
import {
  addContact,
  deleteContact,
  editContact,
  setContacts,
} from "../actions/contactsActions";
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

export const editContactThunk =
  (id: number, payload: Contact) => async (dispatch: Dispatch) => {
    const res = await api.editContact(id, payload);
    dispatch(editContact(id, res.data));
  };

export const deleteContactThunk =
  (id: number) => async (dispatch: Dispatch) => {
    await api.deleteContact(id);
    dispatch(deleteContact(id));
  };
