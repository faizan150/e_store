import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity      
      // state.value += 1;
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity -=actions.payload.quantity
      
      // state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.totalQuantity += action.payload;
    },
    clearCart: (state) => {
      state = initialState
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
