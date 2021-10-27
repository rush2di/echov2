import { appActions } from "./constants";
import { AppStateType } from "./types";

const initState: AppStateType = {
  data: null,
  isLoading: null,
  isError: null,
};

const appGlobalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case appActions.RETRIEVE_SERIALIZED_STATE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case appActions.REQUEST_PLAYLISTS_DATA:
      return { ...state, isLoading: true };
    case appActions.REQUEST_PLAYLISTS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case appActions.REQUEST_PLAYLISTS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default appGlobalReducer;
