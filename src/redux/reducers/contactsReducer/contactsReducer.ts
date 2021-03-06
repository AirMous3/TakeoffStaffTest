import { contactsActionTypes } from "./types/contactsActionTypes";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_CONTACTS,
} from "./constants/contactsReducerConstants";

const initialState: State = {
  items: [],
};

export interface Contact {
  userId: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  id: number;
}

interface State {
  items: Contact[];
}

export const contactsReducer = (
  state = initialState,
  action: contactsActionTypes
): State => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        items: action.contacts,
      };
    case ADD_CONTACT:
      return {
        items: [...state.items, action.payload],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, ...action.payload } : item
        ),
      };
    case DELETE_CONTACT:
      return {
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
