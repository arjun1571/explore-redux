import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featuers/counters/counterSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store;
