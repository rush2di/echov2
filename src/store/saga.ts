import { fork } from "redux-saga/effects";
import { playlistsSaga, authSaga, downloadSaga } from "containers/App/sagas";

function* rootSaga() {
  yield fork(playlistsSaga);
  yield fork(authSaga);
  yield fork(downloadSaga);
}

export default rootSaga;
