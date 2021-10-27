import { fork } from "redux-saga/effects";
import playlistsSaga from "containers/App/sagas";

function* rootSaga() {
  yield fork(playlistsSaga);
}

export default rootSaga;
