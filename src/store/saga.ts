import { fork } from "redux-saga/effects";

import {
  playlistsSaga,
  downloadSaga,
  authSaga,
  likeSaga,
} from "containers/App/sagas";

function* rootSaga() {
  yield fork(playlistsSaga);
  yield fork(downloadSaga);
  yield fork(authSaga);
  yield fork(likeSaga);
}

export default rootSaga;
