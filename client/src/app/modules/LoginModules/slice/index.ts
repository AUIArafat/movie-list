import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginData, LoginState } from "./types";

export const initialState: LoginState = {
  submit: false,
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<LoginData>) => {},
    setSubmit: (state, actions: PayloadAction<boolean>) => {
      state.submit = actions.payload;
    },
  },
});

export const { actions: loginActions } = slice;
export default slice.reducer;
