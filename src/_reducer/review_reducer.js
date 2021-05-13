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
    POST_DELLIKE,
    POST_DELLIKE_FAIL,
    POST_LIST_FAIL,
    POST_VIEW,
    POST_VIEW_FAIL,
    POST_SEARCH_FAIL,
    POST_SEARCH,
    SEARCH_ALL_FAIL,
    SEARCH_ALL,
    REVIEW_DETAIL,
    REVIEW_DETAIL_FAIL
  } from '../_actions/types';
  
  export default function review(state = {}, action) {
    switch (action.type) {
      case POST_VIEW:
      case POST_VIEW_FAIL:
      case POST_DELLIKE:
      case POST_DELLIKE_FAIL:
      case POST_LIST:
      case POST_SAVE:
      case POST_UPDATE:
      case POST_REMOVE:
      case POST_LIKE:
      case POST_SEARCH:
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
      case POST_LIST_FAIL:
      case POST_SEARCH_FAIL:
      case SEARCH_ALL:
      case SEARCH_ALL_FAIL:
      case REVIEW_DETAIL:
      case REVIEW_DETAIL_FAIL :
        return {
          ...state,
        };
      default:
        return state;
    }
  }
  