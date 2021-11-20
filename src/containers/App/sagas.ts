import { uniqBy } from "lodash";
import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import {
  getDownloadTrack,
  getPlaylists,
  getUserData,
  saveUserDownloadedTrack,
  saveUserToDB,
} from "service/axios";
import { login, logout, register } from "service/firebaseAuth";

import {
  requestPlaylistsDataError,
  requestPlaylistsDataSuccess,
  authRegisterSuccess,
  authRegisterError,
  authLoginSuccess,
  authLoginError,
  authLogoutSuccess,
  authLogoutError,
  requestDownloadStart,
  requestDownloadSuccess,
  requestDownloadError,
  requestUserLikeStart,
  requestUserLikeSuccess,
  requestUserLikeError,
} from "./actions";
import { appActions, authActionTypes } from "./constants";
import { makeSelectUser, makeSelectUserDownloads } from "./selectors";
import { TrackDataType } from "./types";
import { serilizeData } from "./utils";

function* playlistsSaga() {
  yield takeLatest(appActions.REQUEST_PLAYLISTS_DATA, requestPlaylists);
}

function* requestPlaylists() {
  try {
    const response = yield call(getPlaylists);
    yield call(serilizeData, response.data);
    yield put(requestPlaylistsDataSuccess(response.data));
  } catch (err) {
    yield put(requestPlaylistsDataError(err));
  }
}

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
    console.log("test", { userData });
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

function* downloadSaga() {
  yield takeEvery(
    appActions.REQUEST_USER_DOWNLOAD_TRACK_START,
    requestDownload
  );
}

function* requestDownload(action) {
  try {
    const user = yield select(makeSelectUser());
    const userDownloads = yield select(makeSelectUserDownloads());
    const downloadLink = yield call(getDownloadTrack, action.payload.id);
    console.log("test", { user });
    yield call(
      saveUserDownloadedTrack,
      user.uid,
      uniqBy([...userDownloads, action.payload], "id")
    );
    yield put(
      requestDownloadSuccess(
        downloadLink.data.url,
        uniqBy([...userDownloads, action.payload], "id")
      )
    );
  } catch (err) {
    yield put(requestDownloadError(action.payload));
  }
}

export { playlistsSaga, authSaga, downloadSaga };
