import ReducerInterface from 'interfaces/reducerInterface';
import produce from 'immer';
import * as types from 'redux/types';

const initialState = {
  auth: {
    data: {},
    isLogin: false,
    error: null,
  },
};

export const authReducer = (state = initialState, action: ReducerInterface) => {
  console.log('action', action);
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.REQUEST_LOGIN:
        draftState.auth.isLogin = false;
        break;

      case types.REQUEST_LOGIN_SUCCESS:
        draftState.auth.data = action.payload;
        draftState.auth.isLogin = true;
        break;

      case types.REQUEST_LOGIN_FAILED:
        draftState.auth.isLogin = false;
        draftState.auth.error = action.error;
        break;
      default:
        break;
    }
  });
};
