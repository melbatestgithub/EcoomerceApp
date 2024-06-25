import { createSlice } from "@reduxjs/toolkit";
import { Logout } from "./userSlice"; // Import the Logout action

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Logout, (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    });
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
