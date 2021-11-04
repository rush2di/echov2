import { fork } from "redux-saga/effects";
import playlistsSaga from "containers/App/sagas";
import authSaga from "containers/AuthForms/sagas";

function* rootSaga() {
  yield fork(playlistsSaga);
  yield fork(authSaga);
}

export default rootSaga;
