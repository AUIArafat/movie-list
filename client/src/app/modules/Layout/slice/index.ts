import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutState } from "./types";

export const initialState: LayoutState = {
  loading: false,
  error: null,
  success: null,
};

const slice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSuccessMsg: (state, action: PayloadAction<string | null>) => {
      state.success = action.payload;
    },
  },
});

export const { actions: layoutActions } = slice;
export default slice.reducer;
