import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../@interfaces/common.interface";
import { getPost } from "../../@services/apis/posts/post.service";

const initialState: IInitialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const posts = await getPost();
  return posts;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export default postSlice.reducer;
