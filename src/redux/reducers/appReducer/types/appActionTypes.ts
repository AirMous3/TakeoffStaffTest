import { login, loginError, logout } from "../actions/appActions";

export type actionStateType =
  | ReturnType<typeof login>
  | ReturnType<typeof loginError>
  | ReturnType<typeof logout>;
