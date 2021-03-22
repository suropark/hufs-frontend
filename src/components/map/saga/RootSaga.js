import { takeLatest } from "redux-saga/effects";
import { postActions } from "../slice/PostSlice";
import { registerPostAsync } from "./PostSaga";

const { registerPost } = postActions;
export default function* rootWatcher() {
  yield takeLatest(registerPost.type, registerPostAsync);
}
