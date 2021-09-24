import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'redux/types';

function* login({ body }: any) {
  // const { username, password } = payload;
  // const response = apiSignin(payload);
  const response = {
    code: 200,
    data: 'hello',
    err: null,
  };
  try {
    if (response.code == 200) {
      yield put({ type: types.REQUEST_LOGIN_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.REQUEST_LOGIN_FAILED, error: response.err });
    }
  } catch (error) {
    yield put({ type: types.REQUEST_LOGIN_FAILED, error: response.err });
  }
}

export function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, login);
}
