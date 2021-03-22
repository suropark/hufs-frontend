import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "post",
  initialState: { id: 0, title: "", content: "", views: 0 },
  reducers: {
    registerPost: (state, post) => {
      return { ...post, id: state.id };
    },
    registerPostAsync: (state, { payload }) => {
      debugger;
      return { ...state, id: payload.id };
    },
  },
});
export const postReducers = PostSlice.reducer;
export const postActions = PostSlice.actions;
