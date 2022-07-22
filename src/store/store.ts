import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "store/reducer";
import rootSaga from "store/saga";

const isProductionBuild = process.env.NODE_ENV === "production";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  // @ts-ignore: Unreachable code error
  isProductionBuild
    ? applyMiddleware(sagaMiddleWare)
    : composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
