import { GET_SCHOLAR } from '../_actions/types';
export default function calendar(state = {}, action) {
  switch (action.type) {
    case GET_SCHOLAR:
      return { scholar: action.payload, ...state };

    default:
      return { ...state };
      break;
  }
}
