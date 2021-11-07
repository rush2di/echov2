import { toast } from "react-toastify";
import { authActionTypes } from "./constants";
import { AuthFormFieldsType, AuthFormSingleFieldType } from "./type";

const onAuthInput = (payload: AuthFormSingleFieldType) => {
  return {
    type: authActionTypes.ON_AUTH_INPUT,
    payload,
  };
};

const authRegisterStart = (payload: AuthFormFieldsType<string | null>) => {
  toast.info("Registring you in");
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_START,
    payload,
  };
};

const authRegisterSuccess = (payload: any) => {
  toast.success("Welcome aboard");
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS,
    payload,
  };
};

const authRegisterError = () => {
  toast.error("something bad happened");
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_ERROR,
  };
};

const authLoginStart = (payload: AuthFormFieldsType<string | null>) => {
  toast.info("loging you in");
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_START,
    payload,
  };
};

const authLoginSuccess = (payload: any, notify = true) => {
  notify && toast.success("Successfuly logged in");
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS,
    payload,
  };
};

const authLoginError = () => {
  toast.error("something bad happened");
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_ERROR,
  };
};

const authLogoutStart = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_START,
  };
};

const authLogoutSuccess = () => {
  toast.info("logged out");
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_SUCCESS,
  };
};

const authLogoutError = () => {
  toast.error("something bad happened");
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
