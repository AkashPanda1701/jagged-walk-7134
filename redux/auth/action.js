
import {
  AUTH_LOGIN_REQ,
  AUTH_REQ_LOADING,
  AUTH_REQ_SUCCESS,
  AUTH_REQ_ERROR,
  AUTH_REQ_LOGOUT,
  AUTH_LOGIN_REQ_ERROR,
  AUTH_LOGIN_LOADING,
} from "./type";

export const authLoading = () => {
  return {
    type: AUTH_REQ_LOADING,
  };
};
export const authSuccess = (data) => {
  return {
    type: AUTH_REQ_SUCCESS,
    payload: data,
  };
};
export const authError = (data) => {
  return {
    type: AUTH_REQ_ERROR,
    payload: data,
  };
};
export const authLogout = () => {
  return {
    type: AUTH_REQ_LOGOUT,
  };
};
export const otpLoading = () => {
  return { type: AUTH_LOGIN_LOADING };
};