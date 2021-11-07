import { takeLatest, call, put } from "redux-saga/effects";

import {
  authRegisterSuccess,
  authRegisterError,
  authLoginSuccess,
  authLoginError,
  authLogoutSuccess,
  authLogoutError,
} from "./actions";
import { authActionTypes } from "./constants";
import { login, logout, register } from "service/firebaseAuth";
import { getUserData, saveUserToDB } from "service/axios";

function* authSaga() {
  yield takeLatest(authActionTypes.REQUEST_AUTH_LOGIN_START, postAuthLogin);
  yield takeLatest(
    authActionTypes.REQUEST_AUTH_REGISTER_START,
    postAuthRegister
  );
  yield takeLatest(authActionTypes.REQUEST_AUTH_LOGOUT_START, postAuthLogout);
}

function* postAuthRegister(action) {
  try {
    const response = yield call(register, action.payload);
    const userData = yield call(
      saveUserToDB,
      response.user,
      action.payload.fullname
    );
    yield put(authRegisterSuccess(userData.data));
  } catch (err) {
    yield put(authRegisterError());
  }
}

function* postAuthLogin(action) {
  try {
    const response = yield call(login, action.payload);
    const userData = yield call(getUserData, response.user);
    yield put(authLoginSuccess(userData.data));
  } catch (err) {
    yield put(authLoginError());
  }
}

function* postAuthLogout() {
  try {
    yield call(logout);
    yield put(authLogoutSuccess());
  } catch (err) {
    yield put(authLogoutError());
  }
}

export default authSaga;
