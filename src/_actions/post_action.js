import axios from 'axios';
import {
  POST_REPORT,
  POST_LIST,
  POST_REMOVE,
  POST_SAVE,
  POST_LIKE,
  POST_UPDATE,
} from './types';

// redux-promise returns promise and can use async/await here
// reudx-chunk returns function
export const postReport = async (dataToSubmit) => {
  // const request = await axios.post("api", dataToSubmit).then(res => res.data)
  // dataToSubmit: 게시글Id, 신고 내용.
  return {
    type: POST_REPORT,
    // payload:  신고 되었는지 여부만 알려주면 될듯 이건
  };
};
export const postSave = async (dataToSubmit) => {
  // const request = await axios.post("api", dataToSubmit).then(res => res.data)
  return {
    type: POST_SAVE,
    payload: dataToSubmit, // 지금은 title , content
  };
};
export const postUpdate = async (dataToSubmit) => {
  return {
    type: POST_UPDATE,
    payload: dataToSubmit, // title, content
  };
};
export const postRemove = async (dataToSubmit) => {
  // const request = axios.delete("url", dataToSubmit) {boardId, postId, (auth?)}
  return {
    type: POST_REMOVE,
    id: dataToSubmit,
  };
};

export const postLike = async (dataToSubmit) => {
  return {
    type: POST_LIKE,
    payload: dataToSubmit, // payload: postNum?
  };
};
