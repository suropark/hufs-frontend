import axios from 'axios';
import { PUBLIC_IP } from '../config';
import {
  POST_SEARCH,
  POST_SEARCH_FAIL,
  POST_REPORT,
  POST_LIST,
  POST_LIST_FAIL,
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
  POST_DELLIKE,
  POST_DELLIKE_FAIL,
  POST_VIEW_FAIL,
  POST_VIEW,
  SEARCH_ALL,
  SEARCH_ALL_FAIL,
} from './types';
// 완료
export const postView = async (postId) => {
  const request = await axios.get(`${PUBLIC_IP}/post/${postId}`);

  if (request.status === 200) {
    return {
      type: POST_VIEW,
      payload: request.data.data, // 객체
      status: request.status,
    };
  } else {
    return {
      type: POST_VIEW_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const postList = async (match) => {
  const request = await axios.get(`${PUBLIC_IP}/board${match.path}`, {
    withCredentials: true,
  });
  if (request.status === 200) {
    return {
      type: POST_LIST,
      payload: request.data.data, // 배열
      status: request.status,
    };
  } else {
    return {
      type: POST_LIST_FAIL,
      status: request.status,
    };
  }
};
//완료
export const postReport = async (postId, body) => {
  const request = await axios //body : postId, content, detail
    .post(`${PUBLIC_IP}/post/${postId}/report`, body);
  if (request.status === 200) {
    return {
      type: POST_REPORT,
      status: request.status,
    };
  } else {
    return {
      type: POST_REPORT_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const postSave = async (body, needDelete, boardId) => {
  const request = await axios.post(`${PUBLIC_IP}/board/${boardId}/post`, body);

  if (needDelete.length !== 0) {
    await axios.post(`${PUBLIC_IP}/post/back`, { url: needDelete });
  }
  if (request.status === 200) {
    return {
      type: POST_SAVE,
      status: request.status,
    };
  } else {
    return {
      type: POST_SAVE_FAIL,
      status: request.error,
    };
  }
};
// 완료
export const postUpdate = async (updated, needDelete, postId) => {
  const request = await axios.put(`${PUBLIC_IP}/post/${postId}`, updated);

  if (needDelete.length !== 0) {
    await axios.post(`${PUBLIC_IP}/post/back`, { url: needDelete });
  }
  if (request.status === 200) {
    return {
      type: POST_UPDATE,
      status: request.status,
    };
  } else {
    return {
      type: POST_UPDATE_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const postRemove = async (postId) => {
  const request = await axios.delete(`${PUBLIC_IP}/post/${postId}`);
  if (request.status === 200) {
    return {
      type: POST_REMOVE,
      status: request.status,
    };
  } else {
    return {
      type: POST_REMOVE_FAIL,
      status: request.status,
    };
  }
};
// 완료
export const postLike = async (postId) => {
  const request = await axios.get(`${PUBLIC_IP}/post/${postId}/addlike`);
  if (request.status === 200) {
    return {
      type: POST_LIKE,
      status: request.status,
    };
  } else {
    return {
      type: POST_LIKE_FAIL,
      status: request.status,
    };
  }
};
export const postDellike = async (postId) => {
  const request = await axios.get(`${PUBLIC_IP}/post/${postId}/dellike`);
  if (request.status === 200) {
    return {
      type: POST_DELLIKE,
      status: request.status,
    };
  } else {
    return {
      type: POST_DELLIKE_FAIL,
      status: request.status,
    };
  }
};

// request  query로 보내야하는데..
// 스웨거 request URL은 맞춤 , 500
export const postScrap = async (postId) => {
  const request = await axios.post(`${PUBLIC_IP}/user/scrap`, null, {
    params: { postId: postId },
  });
  if (request.status === 200) {
    return {
      type: POST_SCRAP,
      status: request.status,
    };
  } else {
    return {
      type: POST_SCRAP_FAIL,
      status: request.status,
    };
  }
};

// id가 스크랩 아이디라서 조금 다른데 해결필요
export const deleteScrap = async (postId) => {
  const request = await axios.delete(`${PUBLIC_IP}/user/scrap`, {
    params: { id: postId },
  });
  if (request.status === 200) {
    return {
      type: POST_SCRAP_REMOVE,
      status: request.status,
    };
  } else {
    return {
      type: POST_SCRAP_REMOVE_FAIL,
      status: request.status,
    };
  }
};

export const postSearch = async (boardId, keyword, option) => {
  const request = await axios.get(`${PUBLIC_IP}/search`, {
    params: { keyword: keyword, option: option, board: boardId }, // option = titleAndContent, title, content, nick
  });

  if (request.data) {
    return {
      type: POST_SEARCH,
      status: request.status,
      payload: request.data.data,
    };
  } else {
    return {
      type: POST_SEARCH_FAIL,
      status: request.status,
      // payload: request.error,
    };
  }
};

export const searchAll = async (keyword, option) => {
  const request = await axios.get(`${PUBLIC_IP}/search`, {
    params: { keyword: keyword, option: option }, // option = titleAndContent, title, content, nick
  });

  if (request.data) {
    return {
      type: SEARCH_ALL,
      status: request.status,
      payload: request.data.data,
    };
  } else {
    return {
      type: SEARCH_ALL_FAIL,
      status: request.status,
      payload: request,
      // payload: request.error,
    };
  }
};
