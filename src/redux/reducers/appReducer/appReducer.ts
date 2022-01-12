import { actionStateType } from "./types/actionTypes";
import { APP_ERROR, APP_LOGIN } from "./constants/appReducerConstants";

const initialState: stateType = {
  userID: null,
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

    default:
      return state;
  }
};
