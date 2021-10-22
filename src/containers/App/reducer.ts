import { appData } from "./constants";
import { AppStateType } from "./types";

const initState: AppStateType = {
  data: appData,
  selected: null,
};

const appGlobalReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appGlobalReducer;
