const appActions = {
  REQUEST_PLAYLISTS_DATA: "REQUEST_PLAYLISTS_DATA",
  REQUEST_PLAYLISTS_DATA_SUCCESS: "REQUEST_PLAYLISTS_DATA_SUCCESS",
  REQUEST_PLAYLISTS_DATA_ERROR: "REQUEST_PLAYLISTS_DATA_ERROR",
  REQUEST_USER_LIKE_TRACK_START: "REQUEST_USER_LIKE_TRACK_START",
  REQUEST_USER_LIKE_TRACK_SUCCESS: "REQUEST_USER_LIKE_TRACK_SUCCESS",
  REQUEST_USER_LIKE_TRACK_ERROR: "REQUEST_USER_LIKE_TRACK_ERROR",
  REQUEST_USER_DOWNLOAD_TRACK_START: "REQUEST_USER_DOWNLOAD_TRACK_START",
  REQUEST_USER_DOWNLOAD_TRACK_SUCCESS: "REQUEST_USER_DOWNLOAD_TRACK_SUCCESS",
  REQUEST_USER_DOWNLOAD_TRACK_ERROR: "REQUEST_USER_DOWNLOAD_TRACK_ERROR",
  RETRIEVE_SERIALIZED_STATE: "RETRIEVE_SERIALIZED_STATE",
};

const authActionTypes = {
  REQUEST_AUTH_REGISTER_START: `REQUEST_AUTH_REGISTER_START`,
  REQUEST_AUTH_REGISTER_SUCCESS: `REQUEST_AUTH_REGISTER_SUCCESS`,
  REQUEST_AUTH_REGISTER_ERROR: `REQUEST_AUTH_REGISTER_ERROR`,
  REQUEST_AUTH_LOGIN_START: `REQUEST_AUTH_LOGIN_START`,
  REQUEST_AUTH_LOGIN_SUCCESS: `REQUEST_AUTH_LOGIN_SUCCESS`,
  REQUEST_AUTH_LOGIN_ERROR: `REQUEST_AUTH_LOGIN_ERROR`,
  REQUEST_AUTH_LOGOUT_START: `REQUEST_AUTH_LOGOUT_START`,
  REQUEST_AUTH_LOGOUT_SUCCESS: `REQUEST_AUTH_LOGOUT_SUCCESS`,
  REQUEST_AUTH_LOGOUT_ERROR: `REQUEST_AUTH_LOGOUT_ERROR`,
};

const downloadStatus = {
  PENDING: `PENDING`,
  ERROR: `ERROR`,
};

const toastMessages = {
  LOGIN_SUCCESS: `Successfuly logged in ✅`,
  LOGOUT_SUCCESS: `Logged out, see you soon 👋`,
  REGISTER_SUCCESS: `Welcome aboard 🥳`,
  ERRORS: `Something went wrong ☹️`
}

export { appActions, authActionTypes, downloadStatus, toastMessages };
