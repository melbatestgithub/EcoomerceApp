import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: false,
    cart:[]
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
    },
    Logout: (state) => {
      state.currentUser = null;
      state.cart=null
    },
  },
});
export const { loginStart, loginSuccess, loginFailure, Logout } =
  userSlice.actions;
export default userSlice.reducer;
