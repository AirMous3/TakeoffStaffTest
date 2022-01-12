import {
  APP_ERROR,
  APP_LOGIN,
  APP_LOGOUT,
} from "../constants/appReducerConstants";

export const login = (value: number) => ({ type: APP_LOGIN, value } as const);
export const loginError = (error: string) =>
  ({ type: APP_ERROR, error } as const);
export const logout = () => ({ type: APP_LOGOUT } as const);
