import { call, delay, put, takeLatest } from "redux-saga/effects";
import request from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";

import { loginActions } from ".";
import { auth } from "../../../../utils/auth";
import { layoutActions } from "../../Layout/slice";

function* loginSubmit({ payload }: any): any {
  yield put(layoutActions.setLoading(true));
  delay(500);
  const url: string = `/login`;
  const options: AxiosRequestConfig = {
    method: "POST",
    data: payload,
    headers: {
      Authorization: "Basic QkRBTUp3dENsaWVudDEwMElkOlhZVmtOelJOekExT08wQkRBTQ",
    },
  };

  try {
    const response: any = yield call(request, url, options);
    yield put(layoutActions.setLoading(false));
    auth.logout();
    yield put(loginActions.setSubmit(true));
    auth.setToken(response.data.access_token);
  } catch (ex: any) {
    yield put(layoutActions.setLoading(false));
    yield put(layoutActions.setError(ex.toString()));
    console.log(ex);
    auth.logout();
  }
}

export function* loginSaga() {
  yield takeLatest(loginActions.login, loginSubmit);
}
