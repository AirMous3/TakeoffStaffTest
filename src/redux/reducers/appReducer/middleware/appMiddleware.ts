import { Dispatch } from "redux";
import { api } from "../../../../api/api";
import { login, loginError } from "../actions/appActions";

export const loginThunk =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const res = await api.login(email, password);
      dispatch(login(res.data[0].id));
    } catch (e) {
      dispatch(loginError("login or password incorrect"));
    }
  };
