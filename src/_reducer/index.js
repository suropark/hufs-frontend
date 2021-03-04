// reducer 합칠 곳
import { combineReducers } from 'redux';
import post from './post_reducer';
import comment from './comment_reducer';
const rootReducer = combineReducers({
  post,
  comment, //user, post, etc..
});

export default rootReducer;
