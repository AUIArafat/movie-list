import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieData, MoviesState } from "./types";

export const initialState: MoviesState = {
  submit: false,
  movies: null,
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, actions: PayloadAction<MovieData>) => {},
    setSubmit: (state, actions: PayloadAction<boolean>) => {
      state.submit = actions.payload;
    },
    getAllMovies: (state) => {},
    getMoviesByFilter: (state, actions: PayloadAction<string>) => {},
    setAllMovies: (state, actions: PayloadAction<MovieData[]>) => {
      state.movies = actions.payload;
    },
  },
});

export const { actions: moviesActions } = slice;
export default slice.reducer;
