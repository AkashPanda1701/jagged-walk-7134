
import { LOGIN_LOADING, LOGIN_SUCCESS,
  LOGIN_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_ERROR, RESET_AUTH, SET_SESSION } from "./type";


const initialState = {
  loading: false,
  error: false,
  message: "",
  user:{}
};


export const authReducer = (state = initialState, { type, payload }) => {

  switch (type) {
      case LOGIN_LOADING:
          return {
              ...state,
              loading: true,
          };
      case LOGIN_SUCCESS:
          return {
              ...state,
              loading: false,
              message: payload.message,
              user: payload.user,
          };
      case LOGIN_ERROR:
          return {
              ...state,
              loading: false,
              error: true,
          };
      case RESET_AUTH:
          return {
              ...state,
              loading: false,
              error: false,
              message: "",
          };

      case SIGNUP_LOADING:
          return {
              ...state,
              loading: true,
          };
      case SIGNUP_SUCCESS:
          return {
              ...state,
              loading: false,
              message: payload.message,
              user: payload.user,
          };
      case SIGNUP_ERROR:
          return {
              ...state,
              loading: false,
              error: true,
          };
      case SET_SESSION:
        
          return {
              ...state,
              user:payload,
          };
         default:
          return state;
  }
};