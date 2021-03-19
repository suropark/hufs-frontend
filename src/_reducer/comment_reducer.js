import {
  COMMENT_LIST,
  COMMENT_REMOVE,
  COMMENT_SAVE,
  COMMENT_LIKE,
  COMMENT_SAVE_FAIL,
  COMMENT_LIKE_FAIL,
  COMMENT_REPORT,
  COMMENT_REPORT_FAIL,
  COMMENT_REMOVE_FAIL,
} from '../_actions/types';

export default function comment(state = initialState, action) {
  const comments = state.comments;
  switch (action.type) {
    case COMMENT_SAVE:
      action.payload.like = 0;
      action.payload.commentId = state.maxNo + 1;
      return {
        maxNo: state.maxNo + 1,
        comments: comments.concat(action.payload),
      };
    case COMMENT_REMOVE:
      return {
        maxNo: state.maxNo,
        comments: comments.filter((comment, index) => index !== action.payload),
      };
    case COMMENT_LIKE:
      return {
        ...state,
        comments: comments.map((comment) => {
          if (comment.commentId === action.payload) {
            return { ...comment, like: comment.like + 1 };
          } else {
            return comment;
          }
        }),
      };
    case COMMENT_REPORT:
    case COMMENT_SAVE_FAIL:
    case COMMENT_LIKE_FAIL:
    case COMMENT_REPORT_FAIL:
    case COMMENT_REMOVE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
// commentId를 시간으로..?
const initialState = {
  maxNo: 4,
  comments: [
    {
      postId: 1,
      commentId: 1,
      userId: 1,
      content: '1',
      like: 1,
    },
    {
      postId: 1,
      commentId: 2,
      userId: 2,
      content: '2',
      like: 2,
    },
    {
      postId: 1,
      commentId: 3,
      userId: 2,
      content: '2',
      like: 3,
    },
    {
      postId: 1,
      commentId: 4,
      userId: 2,
      content: '2',
      like: 4,
    },
  ],
};
