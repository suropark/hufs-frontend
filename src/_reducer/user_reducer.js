// login, logout, register, auth
import {
  INFO_USER,
  AUTH_USER,
  UPDATE_USER,
  WITHDRAW_USER,
  INFO_USER_FAIL,
  UPDATE_USER_FAIL,
  WITHDRAW_USER_FAIL,
} from '../_actions/types';
export default function user(state = {}, action) {
  switch (action.type) {
    case INFO_USER:
      return action.payload;
    case UPDATE_USER:
      return {
        ...state,
        nickname: action.payload.nickname,
        mainMajor: action.payload.mainMajor,
        doubleMajor: action.payload.doubleMajor,
      };
    case WITHDRAW_USER:
      return {};
    case WITHDRAW_USER_FAIL:
    case INFO_USER_FAIL:
    case UPDATE_USER_FAIL:
    default:
      return {
        ...state,
      };
  }
}
