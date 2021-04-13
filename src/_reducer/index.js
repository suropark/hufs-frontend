import { combineReducers } from 'redux';
import post from './post_reducer';
import comment from './comment_reducer';
import user from './user_reducer';
import { all } from 'redux-saga/effects';
// import item, { itemSaga } from '../_actions/reviewPost_action';
import review from './review_reducer';
import loading from '../_actions/loading_action';
import calendar from './calendar_reducer';
const rootReducer = combineReducers({
  post,
  comment,
  user,
  review,
  loading,
  calendar,
});

export default rootReducer;
