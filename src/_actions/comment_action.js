import axios from 'axios';
import { PUBLIC_IP } from '../config';
import {
  COMMENT_REMOVE,
  COMMENT_SAVE,
  COMMENT_LIKE,
  COMMENT_REPORT,
  COMMENT_SAVE_FAIL,
  COMMENT_LIKE_FAIL,
  COMMENT_REMOVE_FAIL,
  COMMENT_REPORT_FAIL,
  COMMENT_REPLY,
} from './types';
//  완료
export const commentSave = async (body) => {
  const request = await axios.post(`${PUBLIC_IP}/reply/add`, body);
  if (request.status === 200) {
    return {
      type: COMMENT_SAVE,
      status: request.status,
    };
  } else {
    return {
      type: COMMENT_SAVE_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const commentLike = async (commentId) => {
  const request = await axios.get(`${PUBLIC_IP}/reply/${commentId}/addlike`);
  if (request.status === 200) {
    return {
      type: COMMENT_LIKE,
      status: request.status,
    };
  } else {
    return {
      type: COMMENT_LIKE_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const commentRemove = async (commentId) => {
  const request = await axios.delete(`${PUBLIC_IP}/reply/${commentId}`);
  if (request.status === 200) {
    return {
      type: COMMENT_REMOVE,
      status: request.status,
    };
  } else {
    return {
      type: COMMENT_REMOVE_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const commentReport = async (commentId, body) => {
  const request = await axios.post(
    `${PUBLIC_IP}/reply/${commentId}/report`,
    body,
  );
  if (request.status === 200) {
    return {
      type: COMMENT_REPORT,
      status: request.status,
    };
  } else {
    return {
      type: COMMENT_REPORT_FAIL,
      status: request.status,
    };
  }
};
export const commentReply = async (reply) => {
  const request = await axios.post(`${PUBLIC_IP}/reply/add/re`, reply);

  return {
    type: COMMENT_REPLY,
  };
};
