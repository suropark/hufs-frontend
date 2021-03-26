import axios from 'axios';
import {
  POST_REPORT,
  POST_LIST,
  POST_REMOVE,
  POST_SAVE,
  POST_LIKE,
  POST_UPDATE,
  POST_REPORT_FAIL,
  POST_SAVE_FAIL,
  POST_REMOVE_FAIL,
  POST_LIKE_FAIL,
  POST_UPDATE_FAIL,
  POST_SCRAP,
  POST_SCRAP_FAIL,
  POST_SCRAP_REMOVE,
  POST_SCRAP_REMOVE_FAIL,
} from './types';

export const postList = async (match) => {
  const request = await axios
    .get(`/board${match.path}`)
    .then((response) => response.data);

  return {
    type: POST_LIST,
    payload: request,
  };
};
export const postReport = async (dataToSubmit) => {
  const request = await axios
    .post('post/report', dataToSubmit)
    .then((response) => response.data);
  if (!request.reportSuccess) {
    return {
      type: POST_REPORT_FAIL,
      reportSuccess: false,
    };
  } else {
    return {
      type: POST_REPORT,
      reportSuccess: true,
    };
  }
};
export const postSave = async (body, needDelete) => {
  const request1 = await axios
    .post('post/save', body)
    .then((response) => response.data); // userId 받아야해
  const request2 =
    needDelete.length === 0
      ? null
      : await axios
          .delete('img/delete', needDelete)
          .then((response) => response.data);
  if (!request1.saveSuccess) {
    return {
      type: POST_SAVE_FAIL,
      saveSuccess: false,
    };
  } else {
    return {
      type: POST_SAVE,
      payload: body, // 지금은 title , content
      saveSuccess: true,
      // userId: request1.userId,
    };
  }
};
export const postUpdate = async (body, needDelete) => {
  const request1 = await axios
    .put('post/update', body)
    .then((response) => response.data);
  if (needDelete.length !== 0) {
    await axios.delete('img/delete', needDelete);
  }

  if (!request1.updateSuccess) {
    return {
      type: POST_UPDATE_FAIL,
      updateSuccess: false,
    };
  } else {
    return {
      type: POST_UPDATE,
      payload: body, // title, content
      updateSuccess: true,
    };
  }
};
export const postRemove = async (postId) => {
  const request = await axios
    .delete('post/delete', postId)
    .then((response) => response.data); //
  if (!request.removeSuccess) {
    return {
      type: POST_REMOVE_FAIL,
      removeSuccess: false,
    };
  } else {
    return {
      type: POST_REMOVE,
      id: postId,
      removeSuccess: true,
    };
  }
};

export const postLike = async (postId) => {
  const request = await axios
    .put('post/like', postId)
    .then((response) => response.data); //
  if (!request.likeSuccess) {
    return {
      type: POST_LIKE_FAIL,
      likeSuccess: false,
    };
  } else {
    return {
      type: POST_LIKE,
      payload: postId, // payload: postId??
      likeSuccess: true,
    };
  }
};

export const postScrap = async (postId) => {
  const request = await axios
    .post('/post/scrap', postId)
    .then((response) => response.message);
  if (request == '') {
    return {
      type: POST_SCRAP,
      success: true,
    };
  } else {
    return {
      type: POST_SCRAP_FAIL,
      success: false,
      message: request,
    };
  }
};

export const deleteScrap = async (postId) => {
  const request = await axios
    .delete('/post/scrap', postId)
    .then((response) => response.message);
  if (request == '') {
    return {
      type: POST_SCRAP_REMOVE,
      success: true,
    };
  } else {
    return {
      type: POST_SCRAP_REMOVE_FAIL,
      success: false,
      message: request,
    };
  }
};
