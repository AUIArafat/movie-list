import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./app/modules/LoginModules/slice";
import layoutReducer from "./app/modules/Layout/slice";
import movieReducer from "./app/modules/MoviesModule/slice";

export function rootReducer() {
  return combineReducers({
    login: loginReducer,
    layout: layoutReducer,
    movies: movieReducer,
  });
}
