import { takeLatest, call, put } from "redux-saga/effects";

import {
  requestPlaylistsDataError,
  requestPlaylistsDataSuccess,
  setSerializedState,
} from "./actions";
import { appActions } from "./constants";
import { getPlaylists } from "service/axios";
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

export default playlistsSaga;
