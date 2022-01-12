import { actionStateType } from "./types/appActionTypes";
import {
  APP_ERROR,
  APP_LOGIN,
  APP_LOGOUT,
} from "./constants/appReducerConstants";

const initialUserID = localStorage.getItem("userId");

const initialState: stateType = {
  userID: initialUserID ? Number(initialUserID) : null,
  loginError: "",
};

type stateType = {
  userID: number | null;
  loginError: string;
};

export const appReducer = (state = initialState, action: actionStateType) => {
  switch (action.type) {
    case APP_LOGIN: {
      return { ...state, userID: action.value };
    }
    case APP_ERROR:
      return { ...state, loginError: action.error };

    case APP_LOGOUT:
      return { ...state, userID: null };
    default:
      return state;
  }
};
