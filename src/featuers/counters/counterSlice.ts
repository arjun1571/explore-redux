import { createSlice } from "@reduxjs/toolkit";
import { CounterType } from "../../@interfaces/common.interface";

const initialState: CounterType[] = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c: { id: any }) => c.id === action.payload);
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c: { id: any }) => c.id === action.payload);
      state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
