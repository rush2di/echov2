import { authActionTypes } from "./constants";
import { AuthFormFieldsType, AuthFormSingleFieldType } from "./type";

const onAuthInput = (payload: AuthFormSingleFieldType) => {
  return {
    type: authActionTypes.ON_AUTH_INPUT,
    payload,
  };
};

const authRegisterStart = (payload: AuthFormFieldsType<string | null>) => {
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_START,
    payload,
  };
};

const authRegisterSuccess = (payload: any) => {
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS,
    payload,
  };
};

const authRegisterError = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_ERROR,
  };
};

const authLoginStart = (payload: AuthFormFieldsType<string | null>) => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_START,
    payload,
  };
};

const authLoginSuccess = (payload: any) => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS,
    payload,
  };
};

const authLoginError = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_ERROR,
  };
};

const authLogoutStart = (payload: AuthFormFieldsType<string | null>) => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_START,
    payload,
  };
};

const authLogoutSuccess = (payload: any) => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_SUCCESS,
    payload,
  };
};

const authLogoutError = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_ERROR,
  };
};

export {
  onAuthInput,
  authRegisterStart,
  authRegisterSuccess,
  authRegisterError,
  authLoginStart,
  authLoginSuccess,
  authLoginError,
  authLogoutStart,
  authLogoutSuccess,
  authLogoutError,
};
