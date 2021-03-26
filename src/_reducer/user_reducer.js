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
export default function user(state = initialState, action) {
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
    case WITHDRAW_USER_FAIL:
    case WITHDRAW_USER:
    case INFO_USER_FAIL:
    case UPDATE_USER_FAIL:
    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  nickname: 'nickname',
  mainMajor: '주전공',
  doubleMajor: '이중전공',
  posts: [
    { postId: 4, title: 'title', content: 'content1' },
    { postId: 126, title: 'title', content: 'content2' },
    { postId: 22222, title: 'title', content: 'content3' },
  ],
  comments: [
    { commentId: 234, content: 'comment', postId: '1', postTitle: 'title1' },
    { commentId: 252, content: 'comment', postId: '2', postTitle: 'title2' },
    { commentId: 222, content: 'comment', postId: '1', postTitle: 'title3' },
  ],
  scraps: [
    { postId: 4, content: 'asfsdf' },
    { postId: 11, content: '123491' },
  ],
};
// userscrap 필요
