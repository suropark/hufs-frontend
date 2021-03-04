import axios from 'axios';
import {
  POST_LIST,
  POST_REMOVE,
  POST_SAVE,
  POST_LIKE,
  POST_UPDATE,
} from './types';

// redux-promise returns promise and can use async/await here
// reudx-chunk returns function
export const postSave = async (dataToSubmit) => {
  // const request = await axios.post("api", dataToSubmit).then(res => res.data)
  return {
    type: POST_SAVE,
    payload: dataToSubmit,
  };
};
export const postUpdate = async (dataToSubmit) => {
  return {
    type: POST_UPDATE,
    payload: dataToSubmit,
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
