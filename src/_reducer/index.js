// reducer 합칠 곳
import { combineReducers } from 'redux';
import post from './post_reducer';
import comment from './comment_reducer';
import user from './user_reducer';
import { all } from "redux-saga/effects"
import item, { itemSaga } from "../_actions/reviewPost_action"
import loading from "../_actions/loading_action"
const rootReducer = combineReducers({
  post,
  comment, //user, post, etc..
  user,
  item,
  loading
});

// 루트 사가

export function* rootSaga() {
  yield all([itemSaga()])
}

export default rootReducer;
