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

const authRegisterSuccess = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS,
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

const authLoginSuccess = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS,
  };
};

const authLoginError = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_ERROR,
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
};
