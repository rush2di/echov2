import { combineReducers } from "redux";

import audioPlayerReducer from "containers/AudioPlayer/reducer";
import appGlobalReducer from "containers/App/reducer";
import authReducer from "containers/AuthForms/reducer";

const rootReducer = combineReducers({
  // reducers go here...
  app: appGlobalReducer,
  player: audioPlayerReducer,
  authForms: authReducer,
});

export default rootReducer;
