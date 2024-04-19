import * as types from "./actionTypes";

export const loginSuccess = (email) => ({
  type: types.LOGIN_SUCCESS,
  payload: { email },
});

export const logout = () => ({
  type: types.LOGOUT,
});
