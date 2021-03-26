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
  POST_SCRAP_FAIL,
  POST_SCRAP,
  POST_SCRAP_REMOVE,
  POST_SCRAP_REMOVE_FAIL,
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
        ...state,
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
    case POST_SCRAP_FAIL:
    case POST_SCRAP:
    case POST_SCRAP_REMOVE:
    case POST_SCRAP_REMOVE_FAIL:
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
      title: '제목',
      content: '<p>안녕</p>',
      like: 0,
      report: 2,
      createdAt: '2021-03-14T06:21:29.000Z',
      updatedAt: '2021-03-14T06:21:29.000Z',
      boardId: 1,
      userId: 1,
      User: {
        nickname: '하연',
      },
    },
    {
      id: 1,
      title: '제목',
      content: '<p>안녕</p>',
      like: 0,
      report: 2,
      createdAt: '2021-03-14T06:21:29.000Z',
      updatedAt: '2021-03-14T06:21:29.000Z',
      boardId: 1,
      userId: 1,
      User: {
        nickname: '하연',
      },
    },
    {
      id: 1,
      title: '제목',
      content: '<p>안녕</p>',
      like: 0,
      report: 2,
      createdAt: '2021-03-14T06:21:29.000Z',
      updatedAt: '2021-03-14T06:21:29.000Z',
      boardId: 1,
      userId: 1,
      User: {
        nickname: '하연',
      },
    },
    {
      id: 4,
      title: '제목',
      content: '<p>안녕</p>',
      like: 0,
      report: 2,
      createdAt: '2021-03-14T06:21:29.000Z',
      updatedAt: '2021-03-14T06:21:29.000Z',
      boardId: 1,
      userId: 1,
      User: {
        nickname: '하연',
      },
    },
  ],
  selected: {},
};
