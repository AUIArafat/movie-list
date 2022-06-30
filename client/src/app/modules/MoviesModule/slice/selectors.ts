import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../../rootState";

const selectSlice = (state: RootState) => state?.movies || initialState;

export const selectMovies = createSelector([selectSlice], (state) => state);
export const selectSubmit = createSelector(
  [selectSlice],
  (state) => state.submit
);
export const selectAllMovies = createSelector(
  [selectSlice],
  (state) => state.movies
);
