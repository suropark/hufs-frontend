// login, logout, register, auth

import axios from 'axios';
import { INFO_USER, AUTH_USER } from './types';

export const getUserInfo = async () => {
  // const request = axios.get('user/info').then((response) => response.data);

  return {
    type: INFO_USER,
    // payload: request,
  };
};
export function auth() {
  const request = axios.get('authApi').then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
