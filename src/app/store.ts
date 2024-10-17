import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featuers/counters/counterSlice";
import postReducer from "../featuers/posts/postSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
  },
});

export default store;
