import { createSlice } from "@reduxjs/toolkit";
import { IDetailAPI } from "src/pages/detail/type";

type TState = {
  cart: IDetailAPI[];
};

// Cách 2: tách initialState ra bên ngoài
const initialState: TState = {
  cart: [],
};

const cartSlice = createSlice({
  // Cách 1: sử dụng as
  //   initialState: {
  //     cart: [] as TState["cart"],
  //   },
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);

      // redux-toolkit dùng "Immer" để "return [...state];"
      // !Không dùng return - Nếu dùng phải tự clone (return [...state])
    },
    removeCart: (state, action) => {
      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeCart } = cartSlice.actions;
