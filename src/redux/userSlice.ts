import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: { email: "" },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action: {payload: {email: string}}) => {
      state.login.email = action.payload.email;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { loginSuccess } = userSlice.actions;
