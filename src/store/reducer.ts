import { combineReducers } from "redux";

import audioPlayerReducer from "containers/common/AudioPlayer/reducer";

const rootReducer = combineReducers({
  // reducers goes here...
  player: audioPlayerReducer,
});

export default rootReducer;
