import {
  POST_LIST,
  POST_REMOVE,
  POST_SAVE,
  POST_LIKE,
  POST_UPDATE,
  POST_REPORT,
  POST_UPDATE_FAIL,
  POST_REPORT_FAIL,
  POST_LIKE_FAIL,
  POST_REMOVE_FAIL,
} from '../_actions/types';

export default function post(state = initialState, action) {
  let posts = state.posts;

  switch (action.type) {
    case POST_LIST:
      return {
        posts: action.payload,
        maxNo: action.payload.length,
      };
    case POST_SAVE:
      return {
        posts: posts.concat({
          ...action.payload,
          id: state.maxNo + 1,
          // userId: action.userId,
          like: 0,
        }),
        selected: {},
        maxNo: state.maxNo + 1,
      };
    case POST_UPDATE:
      return {
        ...state,
        posts: posts.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              title: action.payload.title,
              content: action.payload.content,
            };
          } else {
            return post;
          }
        }),
      };
    case POST_REMOVE:
      return {
        ...state,
        posts: posts.filter((post) => post.id !== action.id),
        selectedBoard: {},
        deleteSuccess: true,
      };
    case POST_LIKE:
      return {
        ...state,
        posts: posts.map((post) => {
          if (post.id === action.payload) {
            return { ...post, like: post.like + 1 };
          } else {
            return post;
          }
        }),
      };
    case POST_REMOVE_FAIL:
    case POST_UPDATE_FAIL:
    case POST_REPORT_FAIL:
    case POST_LIKE_FAIL:
    case POST_UPDATE_FAIL:
    case POST_REPORT:
    case POST_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
}

const initialState = {
  maxNo: 4,
  posts: [
    {
      id: 1,
      boardId: 1,
      title: '1번입니다',
      content: '1번 내용',
      like: 0,
      userId: '아이디가 int?',
    },
    {
      id: 2,
      boardId: 1,
      title: '2번입니다',
      content: '2번 내용',
      like: 0,
      userId: '아이디가 int?',
    },
    {
      id: 3,
      boardId: 1,
      title: '3번입니다',
      content: '3번 내용',
      like: 0,
      userId: '아이디가 int?',
    },
    {
      id: 4,
      boardId: 1,
      title: '4번입니다',
      content: '4번 내용',
      like: 0,
      userId: '아이디가 int?',
    },
  ],
  selected: {},
};
