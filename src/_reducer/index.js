// reducer 합칠 곳
import { combineReducers } from 'redux';
import post from './post_reducer';
import comment from './comment_reducer';
import user from './user_reducer';
const rootReducer = combineReducers({
  post,
  comment, //user, post, etc..
  user,
});

export default rootReducer;
