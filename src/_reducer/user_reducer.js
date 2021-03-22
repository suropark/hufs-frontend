// login, logout, register, auth
import { INFO_USER, AUTH_USER } from '../_actions/types';
export default function user(state = initialState, action) {
  switch (action.type) {
    case INFO_USER:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  id: 'id123',
  nickName: 'nickName',
  posts: [
    { postId: 1, content: 'content1' },
    { postId: 2, content: 'content2' },
    { postId: 3, content: 'content3' },
  ],
  comments: [
    { commentId: 1, content: 'comment' },
    { commentId: 2, content: 'comment' },
    { commentId: 3, content: 'comment' },
  ],
};
// userscrap 필요
