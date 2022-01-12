import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:8080`,
});

export const api = {
  login(login: string, password: string) {
    return instance.get(`/auth?login=${login}&password=${password}`);
  },
  getContacts(userId: number) {
    return instance.get(`/contacts?userId=${userId}`);
  },
};
