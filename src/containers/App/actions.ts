import { AuthFormFieldsType } from "containers/AuthForms/type";
import { toast } from "react-toastify";

import { appActions, authActionTypes, toastMessages } from "./constants";
import { TrackDataType } from "./types";
import axios from "axios";

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

const authRegisterStart = (payload: AuthFormFieldsType<string | null>) => {
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_START,
    payload,
  };
};

const authRegisterSuccess = (payload: any) => {
  toast.success(toastMessages.REGISTER_SUCCESS);
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS,
    payload,
  };
};

const authRegisterError = () => {
  toast.error(toastMessages.ERRORS);
  return {
    type: authActionTypes.REQUEST_AUTH_REGISTER_ERROR,
  };
};

const authLoginStart = (payload: AuthFormFieldsType<string | null>) => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_START,
    payload,
  };
};

const authLoginSuccess = (payload: any, notify = true) => {
  notify && toast.success(toastMessages.LOGIN_SUCCESS);
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS,
    payload,
  };
};

const authLoginError = (message: string = toastMessages.ERRORS) => {
  toast.error(message);
  return {
    type: authActionTypes.REQUEST_AUTH_LOGIN_ERROR,
  };
};

const authLogoutStart = () => {
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_START,
  };
};

const authLogoutSuccess = () => {
  toast.info(toastMessages.LOGOUT_SUCCESS);
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_SUCCESS,
  };
};

const authLogoutError = () => {
  toast.error(toastMessages.ERRORS);
  return {
    type: authActionTypes.REQUEST_AUTH_LOGOUT_ERROR,
  };
};

const requestDownloadStart = (track: TrackDataType) => {
  return {
    type: appActions.REQUEST_USER_DOWNLOAD_TRACK_START,
    payload: track,
  };
};

const requestDownloadSuccess = (
  downloadURL: any,
  trackUID: TrackDataType[]
) => {
  const newWindow = window.open(downloadURL.data.file, "_blank") as Window;
  newWindow && newWindow.focus();
  return {
    type: appActions.REQUEST_USER_DOWNLOAD_TRACK_SUCCESS,
    payload: trackUID,
  };
};

const requestDownloadError = (trackUID: string) => {
  toast.error(toastMessages.ERRORS);
  return {
    type: appActions.REQUEST_USER_DOWNLOAD_TRACK_ERROR,
    payload: trackUID,
  };
};

const requestUserLikeStart = (newLikes: TrackDataType[]) => {
  return {
    type: appActions.REQUEST_USER_LIKE_TRACK_START,
    payload: newLikes,
  };
};

const requestUserLikeSuccess = (likedTracks: TrackDataType[]) => {
  return {
    type: appActions.REQUEST_USER_LIKE_TRACK_SUCCESS,
    payload: likedTracks,
  };
};

const requestUserLikeError = () => {
  toast.error(toastMessages.ERRORS);
  return {
    type: appActions.REQUEST_USER_LIKE_TRACK_ERROR,
  };
};

export {
  requestPlaylistsData,
  requestPlaylistsDataSuccess,
  requestPlaylistsDataError,
  setSerializedState,
  authRegisterStart,
  authRegisterSuccess,
  authRegisterError,
  authLoginStart,
  authLoginSuccess,
  authLoginError,
  authLogoutStart,
  authLogoutSuccess,
  authLogoutError,
  requestDownloadStart,
  requestDownloadSuccess,
  requestDownloadError,
  requestUserLikeStart,
  requestUserLikeSuccess,
  requestUserLikeError,
};
