import axios from 'axios';
import { PUBLIC_URL } from '../config';
import { GET_SCHOLAR, GET_SCHOLAR_FAIL } from './types';
// 완료
export const getScholar = async () => {
  const request = await axios.get(`${PUBLIC_URL}/scholarship`);
  if (request.status === 200) {
    return {
      type: GET_SCHOLAR,
      payload: request.data,
      status: request.status,
    };
  } else {
    return {
      type: GET_SCHOLAR_FAIL,
      status: request.status,
    };
  }
};
