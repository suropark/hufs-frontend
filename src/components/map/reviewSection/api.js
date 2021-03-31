import axios from 'axios';

// 음식 상세 조회 API 호출 함수
export const fetchItemApi = (id) =>
  axios.get(`http://52.78.2.40:8080/store/review/${id}`);

// 음식 목록 조회 API 호출 함수
export const fetchItemListApi = (id) =>
  axios.get(`http://52.78.2.40:8080/store/${id}/review`);

// 음식 삭제 API
export const removeItemApi = (id) =>
  axios.delete(`http://52.78.2.40:8080/store/review/${id}`);
