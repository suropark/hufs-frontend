// login, logout, register, auth
import {
  INFO_USER,
  AUTH_USER,
  UPDATE_USER,
  WITHDRAW_USER,
  INFO_USER_FAIL,
  UPDATE_USER_FAIL,
  WITHDRAW_USER_FAIL,
  AUTH_EMAIL,
  AUTH_EMAIL_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
} from '../_actions/types';
export default function user(state = {}, action) {
  switch (action.type) {
    case INFO_USER:
      return action.payload;

    case LOGOUT_USER:
    case WITHDRAW_USER:
      return {};
    case AUTH_EMAIL:
    case LOGOUT_USER_FAIL:
    case WITHDRAW_USER_FAIL:
    case AUTH_EMAIL_FAIL:
    case INFO_USER_FAIL:
    case UPDATE_USER_FAIL:
    case UPDATE_USER:
    default:
      return {
        ...state,
      };
  }
}
