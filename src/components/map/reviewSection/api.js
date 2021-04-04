import axios from 'axios';
import { PUBLIC_IP } from '../../../config';
// 음식 상세 조회 API 호출 함수
export const fetchItemApi = (id) =>
  axios.get(`${PUBLIC_IP}/store/review/${id}`);

// 음식 목록 조회 API 호출 함수
export const fetchItemListApi = (id) =>
  axios.get(`${PUBLIC_IP}/store/${id}/review`);

// 음식 삭제 API
export const removeItemApi = (id) =>
  axios.delete(`${PUBLIC_IP}/store/review/${id}`);
