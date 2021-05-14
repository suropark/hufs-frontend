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
  COMMENT_REPLY,
} from '../_actions/types';

export default function comment(state = {}, action) {
  switch (action.type) {
    case COMMENT_SAVE:
    case COMMENT_REMOVE:
    case COMMENT_LIKE:
    case COMMENT_REPORT:
    case COMMENT_SAVE_FAIL:
    case COMMENT_LIKE_FAIL:
    case COMMENT_REPORT_FAIL:
    case COMMENT_REMOVE_FAIL:
    case COMMENT_REPLY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
