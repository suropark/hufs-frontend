import { createStore } from "redux";

/**
 * Action Type
 */

const SET_MAP = "setMap";

const setMap = (map) => {
  return {
    type: SET_MAP,
    map: map
  }
};
};



const reducer = (state = {
  mapState: {
    map: null
  }
}, action) => {
  console.log(action);
  switch (action.type) {

    case SET_MAP:
      return {
        ...state,
        mapState: {
          ...state.mapState,
          map: action.map
        }
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setMap
};

export default store;