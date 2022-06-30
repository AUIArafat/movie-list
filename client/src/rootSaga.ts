import { all } from "redux-saga/effects";
import { loginSaga } from "./app/modules/LoginModules/slice/saga";
import { movieSaga } from "./app/modules/MoviesModule/slice/saga";

export default function* rootSaga() {
  yield all([loginSaga(), movieSaga()]);
}
