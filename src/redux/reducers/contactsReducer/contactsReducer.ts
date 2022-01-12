import { contactsActionTypes } from "./types/contactsActionTypes";
import { SET_CONTACTS } from "./constants/contactsReducerConstants";

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
    default:
      return state;
  }
};
