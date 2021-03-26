// login, logout, register, auth

import axios from 'axios';
import {
  INFO_USER,
  AUTH_USER,
  UPDATE_USER,
  WITHDRAW_USER,
  INFO_USER_FAIL,
  POST_UPDATE_FAIL,
  WITHDRAW_USER_FAIL,
} from './types';

export const withdrawUser = async () => {
  const request = await axios
    .delete('/user')
    .then((response) => response.message);
  if (request == 'UNAUTHORIZED') {
    return {
      type: WITHDRAW_USER_FAIL,
      payload: request,
    };
  } else {
    return {
      type: WITHDRAW_USER,
      payload: request,
    };
  }
};
export const updateUser = async (updatedData) => {
  const request = await axios
    .put('/user', updatedData)
    .then((response) => response.message);
  switch (request) {
    case 'INVALID_NICKNAME_TIME':
      return {
        type: POST_UPDATE_FAIL,
        payload: request,
      };
    case 'UNAUTHORIZED':
      return {
        type: POST_UPDATE_FAIL,
        payload: request,
      };
    case 'FORBIDDEN_SUSPENSION':
      return {
        type: POST_UPDATE_FAIL,
        payload: request,
      };
    case 'CONFLICT_NICKNAME':
      return {
        type: POST_UPDATE_FAIL,
        payload: request,
      };
    default:
      return {
        type: UPDATE_USER,
        payload: updatedData,
        success: true,
      };
  }
};
export const getUserInfo = async () => {
  const request = await axios.all([
    axios.get('/user'),
    axios.get('/user/directory'),
    axios.get('/user/post'),
    axios.get('/user/comment'),
  ]);
  if (request[0].message == 'UNAUTHORIZED') {
    return {
      type: INFO_USER_FAIL,
      payload: false,
    };
  }
  const response = {
    email: request[0].data.email,
    webMail: request[0].data.webMail,
    nickname: request[0].data.nickname,
    mainMajor: request[0].data.mainMajor,
    doubleMajor: request[0].data.doubleMajor,
    posts: request[1].data,
    comments: request[2].data,
    scraps: request[3].data,
  };
  return {
    type: INFO_USER,
    payload: response,
  };
};
export function auth() {
  const request = axios.get('user/auth').then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
