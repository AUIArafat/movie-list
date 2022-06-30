import { call, delay, put, takeLatest } from "redux-saga/effects";
import request from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";
import { layoutActions } from "../../Layout/slice";
import { moviesActions } from ".";

function* addMovieSubmit({ payload }: any): any {
  yield put(layoutActions.setLoading(true));
  delay(500);
  const url: string = `/movies/add`;
  const options: AxiosRequestConfig = {
    method: "POST",
    data: payload,
  };

  try {
    const response: any = yield call(request, url, options);
    yield put(layoutActions.setLoading(false));
    yield put(layoutActions.setSuccessMsg(response.message));
    yield put(moviesActions.setSubmit(true));
  } catch (ex: any) {
    yield put(layoutActions.setLoading(false));
    yield put(layoutActions.setError(ex.toString()));
  }
}

function* fetchAllMovies(): any {
  yield put(layoutActions.setLoading(true));
  delay(500);
  const url: string = `/movies`;
  const options: AxiosRequestConfig = {
    method: "GET",
  };

  try {
    const response: any = yield call(request, url, options);
    yield put(layoutActions.setLoading(false));
    yield put(moviesActions.setAllMovies(response));
  } catch (ex: any) {
    yield put(layoutActions.setLoading(false));
    yield put(layoutActions.setError(ex.toString()));
  }
}

function* fetchMoviesByFilter({ payload }): any {
  yield put(layoutActions.setLoading(true));
  delay(500);
  const url: string = `/movies/findByFilter/?categories=${payload}`;
  const options: AxiosRequestConfig = {
    method: "GET",
  };

  try {
    const response: any = yield call(request, url, options);
    yield put(layoutActions.setLoading(false));
    yield put(moviesActions.setAllMovies(response));
  } catch (ex: any) {
    yield put(layoutActions.setLoading(false));
    yield put(layoutActions.setError(ex.toString()));
  }
}

export function* movieSaga() {
  yield takeLatest(moviesActions.addMovie, addMovieSubmit);
  yield takeLatest(moviesActions.getAllMovies, fetchAllMovies);
  yield takeLatest(moviesActions.getMoviesByFilter, fetchMoviesByFilter);
}
