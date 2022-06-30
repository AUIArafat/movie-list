import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../../rootState";

const selectSlice = (state: RootState) => state?.login || initialState;

export const selectLogin = createSelector([selectSlice], (state) => state);

export const selectSubmit = createSelector(
  [selectSlice],
  (state) => state.submit
);
