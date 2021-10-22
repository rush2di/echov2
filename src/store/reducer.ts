import { combineReducers } from "redux";

import audioPlayerReducer from "containers/AudioPlayer/reducer";
import appGlobalReducer from "containers/App/reducer";

const rootReducer = combineReducers({
  // reducers goes here...
  app: appGlobalReducer,
  player: audioPlayerReducer,
});

export default rootReducer;
