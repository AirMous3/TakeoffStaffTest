import { login, loginError } from "../actions/appActions";

export type actionStateType =
  | ReturnType<typeof login>
  | ReturnType<typeof loginError>;
