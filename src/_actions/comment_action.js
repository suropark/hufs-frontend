import axios from 'axios';
import {
  COMMENT_LIST,
  COMMENT_REMOVE,
  COMMENT_SAVE,
  COMMENT_LIKE,
  COMMENT_REPORT,
  COMMENT_SAVE_FAIL,
  COMMENT_LIKE_FAIL,
  COMMENT_REMOVE_FAIL,
  COMMENT_REPORT_FAIL,
} from './types';

export const commentSave = async (body) => {
  const request = await axios
    .post('reply/add', body)
    .then((response) => response.data);
  // response로 뭐라도 받아야해
  if (!request.saveSuccess) {
    return {
      type: COMMENT_SAVE_FAIL,
      saveSuccess: false,
    };
  } else {
    return {
      type: COMMENT_SAVE,
      payload: body, // req로 바꾸기
      saveSuccess: true, // request.saveSuccess
    };
  }
};

export const commentLike = async (commentId) => {
  const request = await axios
    .get(`reply/${commentId}/addlike`, commentId)
    .then((response) => response.data);
  if (!request.likeSuccess) {
    return {
      type: COMMENT_LIKE_FAIL,
      likeSuccess: false,
      // alreadyLiked: boolean
    };
  } else {
    return {
      type: COMMENT_LIKE,
      payload: commentId,
      likeSuccess: true,
    };
  }
};
export const commentRemove = async (commentId) => {
  const request = await axios
    .delete(`/reply/${commentId}`)
    .then((response) => response.data);
  if (!request.removeSuccess) {
    return {
      type: COMMENT_REMOVE_FAIL,
      removeSuccess: false,
    };
  } else {
    return {
      type: COMMENT_REMOVE,
      payload: commentId,
      removeSuccess: true,
    };
  }
};
export const commentReport = async (commentId, body) => {
  //commentId, 내용
  const request = await axios
    .post(`/reply/${commentId}/report`, body)
    .then((response) => response.data);

  if (!request.reportSuccess) {
    return {
      type: COMMENT_REPORT_FAIL,
      reportSuccess: false,
    };
  } else {
    return {
      type: COMMENT_REPORT,
      reportSuccess: true,
    };
  }
};
