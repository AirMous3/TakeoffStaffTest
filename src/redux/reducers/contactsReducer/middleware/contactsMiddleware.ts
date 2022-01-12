import { Dispatch } from "redux";
import { api } from "../../../../api/api";
import { setContacts } from "../actions/contactsActions";

export const getContacts = (id: number) => async (dispatch: Dispatch) => {
  const res = await api.getContacts(id);
  dispatch(setContacts(res.data));
};
