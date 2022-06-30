import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../../rootState";

const selectSlice = (state: RootState) => state?.layout || initialState;

export const selectLayout = createSelector([selectSlice], (state) => state);

export const selectError = createSelector(
  [selectSlice],
  (state) => state.error
);
export const selectSuccessMsg = createSelector(
  [selectSlice],
  (state) => state.success
);
export const selectLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);
