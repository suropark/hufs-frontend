import { GET_SCHOLAR, GET_SCHOLAR_FAIL } from '../_actions/types';
export default function calendar(state = {}, action) {
  switch (action.type) {
    case GET_SCHOLAR:
      return { scholar: action.payload.data, ...state };
    case GET_SCHOLAR_FAIL:
    default:
      return { ...state };
      break;
  }
}
