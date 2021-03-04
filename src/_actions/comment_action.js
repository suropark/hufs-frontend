import axios from 'axios';
import {
  COMMENT_LIST,
  COMMENT_REMOVE,
  COMMENT_SAVE,
  COMMENT_LIKE,
} from './types';

export const commentSave = (dataToSubmit) => {
  //const req = axios.post("api", dataToSubmit).then(res => res.data)
  // dataToSubmit = {postId:'', userId:'', content:''}
  return {
    type: COMMENT_SAVE,
    payload: dataToSubmit, // req로 바꾸기
  };
};

export const commentLike = (dataToSubmit) => {
  //const req = axios.post("api", dataToSubmit).then(res => res.data)
  // dataToSubmit = commentId
  return {
    type: COMMENT_LIKE,
    payload: dataToSubmit,
  };
  // 이미 like한 유저인지를 받아와서 -> if로 type:COMMENT_UNABLE 을 return하면 reducer에서 return {...comments, likesuccess:false하면될듯}
};
// remove에 필요한 것. commentId, 유저의 권한 여부(작성자인가?),
export const commentRemove = (dataToSubmit) => {
  // dataToSubmit = commentId
  return {
    type: COMMENT_REMOVE,
    payoad: dataToSubmit.commentId,
  };
};
