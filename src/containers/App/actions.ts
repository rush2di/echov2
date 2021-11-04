import { appActions } from "./constants";

const setSerializedState = (payload) => {
  return {
    type: appActions.RETRIEVE_SERIALIZED_STATE,
    payload,
  };
};

const requestPlaylistsData = () => {
  return {
    type: appActions.REQUEST_PLAYLISTS_DATA,
  };
};

const requestPlaylistsDataSuccess = (payload) => {
  return {
    type: appActions.REQUEST_PLAYLISTS_DATA_SUCCESS,
    payload,
  };
};

const requestPlaylistsDataError = (payload) => {
  return {
    type: appActions.REQUEST_PLAYLISTS_DATA_ERROR,
    payload,
  };
};

export {
  requestPlaylistsData,
  requestPlaylistsDataSuccess,
  requestPlaylistsDataError,
  setSerializedState,
};
