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
