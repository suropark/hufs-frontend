import {combineReducers} from "redux";
import {postReducers} from "./PostSlice";

const RootReducer = combineReducers({postReducers});

export default RootReducer;