import { takeLatest, call, put } from "redux-saga/effects";

import { authRegisterSuccess, authRegisterError } from "./actions";
import { authActionTypes } from "./constants";
import { signUp } from "service/firebaseAuth";
import { structureUserDB } from "service";

function* authSaga() {
  yield takeLatest(
    authActionTypes.REQUEST_AUTH_REGISTER_START,
    postRegisterAuthSchema
  );
  yield takeLatest(
    authActionTypes.REQUEST_AUTH_LOGIN_START,
    postLoginAuthSchema
  );
}

function* postRegisterAuthSchema(action) {
  try {
    const response = yield call(signUp, action.payload);
    yield call(structureUserDB, response, action.payload.displayName);
    // yield call(serilizeData, response.data);
    // yield put(authSubmitSuccess(response.data));
  } catch (err) {
    yield put(authRegisterError());
  }
}

function* postLoginAuthSchema(action) {
  try {
    const response = yield call(signUp, action.payload);
    console.log({ response });
    // yield call(saveUserToDB, response);
    // yield call(serilizeData, response.data);
    // yield put(authSubmitSuccess(response.data));
  } catch (err) {
    yield put(authRegisterError());
  }
}

export default authSaga;
