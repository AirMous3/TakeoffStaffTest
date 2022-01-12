import { APP_ERROR, APP_LOGIN } from "../constants/appReducerConstants";

export const login = (value: number) => ({ type: APP_LOGIN, value } as const);
export const loginError = (error: string) =>
  ({ type: APP_ERROR, error } as const);
