import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../../@interfaces/common.interface";

const initialState: CounterState[] = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 1,
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
