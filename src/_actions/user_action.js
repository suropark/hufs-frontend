// login, logout, register, auth

import axios from 'axios';

export function auth() {
  const request = axios.get('authApi').then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
