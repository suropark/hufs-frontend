// login, logout, register, auth
import { INFO_USER, AUTH_USER, UPDATE_USER } from '../_actions/types';
export default function user(state = initialState, action) {
  switch (action.type) {
    case INFO_USER:
      return {
        major: action.payload.major,
        secondMajor: action.payload.secondMajor,
        nickName: action.payload.nickName,
        posts: action.payload.posts,
        comments: action.payload.comments,
        scraps: action.payload.scraps,
      };
    case UPDATE_USER:
      return {
        ...state,
        nickName: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

const initialState = {
  nickName: 'nickName',
  major: '주전공',
  secondMajor: '이중전공',
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
