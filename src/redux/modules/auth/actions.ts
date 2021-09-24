import * as types from 'redux/types';

export const loginRequest = (payload: any) => ({
  type: types.REQUEST_LOGIN,
  payload,
});

export const LoginFaild = (payload: any) => ({
  type: types.REQUEST_LOGIN_FAILED,
  payload,
});

export const LoginSuccess = (payload: any) => ({
  type: types.REQUEST_LOGIN_SUCCESS,
  payload,
});
