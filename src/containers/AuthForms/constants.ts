import { IconName } from "@fortawesome/fontawesome-common-types";

import {
  defaultFields,
  inputFieldEmail,
  inputFieldName,
  inputFieldPassword,
  inputFieldStats,
} from "components/InputField/constants";

const AUTHFORM_NOTICE_TEXT = `or continue with`;

const FACEBOOK_BTN_TEXT = `Continue with Facebook`;
const GOOGLE_BTN_TEXT = `Continue with Google`;

const PASSWORD_FIELD_FEEDBACK = `
password should contain atleast 
8 characters, one digit, one lowercase, 
one uppercase, and one symbol`;
const REQUIRED_FIELD_FEEDBACK = `is required`;
const SHORT_FIELD_FEEDBACK = `too short`;
const WRONG_FIELD_PATTERN = `wrong`;

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASS_PATTERN = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const authActionTypes = {
  ON_AUTH_INPUT: `ON_AUTH_INPUT`,
  REQUEST_AUTH_REGISTER_START: `REQUEST_AUTH_REGISTER_START`,
  REQUEST_AUTH_REGISTER_SUCCESS: `REQUEST_AUTH_REGISTER_SUCCESS`,
  REQUEST_AUTH_REGISTER_ERROR: `REQUEST_AUTH_REGISTER_ERROR`,
  REQUEST_AUTH_LOGIN_START: `REQUEST_AUTH_LOGIN_START`,
  REQUEST_AUTH_LOGIN_SUCCESS: `REQUEST_AUTH_LOGIN_SUCCESS`,
  REQUEST_AUTH_LOGIN_ERROR: `REQUEST_AUTH_LOGIN_ERROR`,
  REQUEST_AUTH_LOGOUT_START: `REQUEST_AUTH_LOGOUT_START`,
  REQUEST_AUTH_LOGOUT_SUCCESS: `REQUEST_AUTH_LOGOUT_SUCCESS`,
  REQUEST_AUTH_LOGOUT_ERROR: `REQUEST_AUTH_LOGOUT_ERROR`,
};

type passwordFieldStates = {
  icon: IconName;
  type: string;
};

const passwordFieldShowState: passwordFieldStates = {
  icon: `eye-slash`,
  type: `text`,
};

const passwordFieldHideState: passwordFieldStates = {
  icon: `eye`,
  type: `password`,
};

const defaultBtnText = {
  login: `Login`,
  register: `Submit`,
};

export {
  AUTHFORM_NOTICE_TEXT,
  FACEBOOK_BTN_TEXT,
  GOOGLE_BTN_TEXT,
  defaultBtnText,
  authActionTypes,
  passwordFieldShowState,
  passwordFieldHideState,
  WRONG_FIELD_PATTERN,
  SHORT_FIELD_FEEDBACK,
  REQUIRED_FIELD_FEEDBACK,
  PASSWORD_FIELD_FEEDBACK,
  EMAIL_PATTERN,
  PASS_PATTERN,
  defaultFields,
  inputFieldStats,
  inputFieldName,
  inputFieldEmail,
  inputFieldPassword,
};
