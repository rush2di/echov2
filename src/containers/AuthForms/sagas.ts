import { takeLatest, call, put } from "redux-saga/effects";

import {
  authRegisterSuccess,
  authRegisterError,
  authLoginSuccess,
  authLoginError,
} from "./actions";
import { authActionTypes } from "./constants";
import { login, register } from "service/firebaseAuth";
import { getUserData, saveUserToDB } from "service/axios";

function* authSaga() {
  yield takeLatest(
    authActionTypes.REQUEST_AUTH_LOGIN_START,
    postLoginAuthSchema
  );
  yield takeLatest(
    authActionTypes.REQUEST_AUTH_REGISTER_START,
    postRegisterAuthSchema
  );
}

function* postRegisterAuthSchema(action) {
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

function* postLoginAuthSchema(action) {
  try {
    const response = yield call(login, action.payload);
    const userData = yield call(getUserData, response.user);
    yield put(authLoginSuccess(userData.data));
  } catch (err) {
    yield put(authLoginError());
  }
}

export default authSaga;
