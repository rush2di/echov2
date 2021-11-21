import { findIndex, remove } from "lodash";
import { appActions, authActionTypes, downloadStatus } from "./constants";
import { AppStateType, PendingDownloadsUIDsType } from "./types";

const initState: AppStateType = {
  currentUser: {
    uid: null,
    avatar: null,
    fullname: null,
    likedTracks: [],
    downloadedTracks: [],
  },
  data: null,
  isError: null,
  isOnline: null,
  isLoading: null,
  isSubmiting: null,
  isAuthError: null,
  pendingDownloadsUIDs: [], // trackUID
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
    case authActionTypes.REQUEST_AUTH_REGISTER_START:
      return { ...state, isSubmiting: true };
    case authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        isOnline: true,
        isSubmiting: false,
        currentUser: {
          uid: action.payload.id,
          fullname: action.payload.user_fullname,
          avatar: action.payload.user_avatar,
          likedTracks: action.payload.liked_tracks,
          downloadedTracks: action.payload.downloaded_tracks,
        },
      };
    case authActionTypes.REQUEST_AUTH_REGISTER_ERROR:
      return {
        ...state,
        isAuthError: true,
        isSubmiting: false,
      };
    case authActionTypes.REQUEST_AUTH_LOGIN_START:
      return { ...state, isSubmiting: true };
    case authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthError: false,
        isSubmiting: false,
        isOnline: true,
        currentUser: {
          uid: action.payload.id,
          fullname: action.payload.user_fullname,
          avatar: action.payload.user_avatar,
          likedTracks: action.payload.liked_tracks,
          downloadedTracks: action.payload.downloaded_tracks,
        },
      };
    case authActionTypes.REQUEST_AUTH_LOGIN_ERROR:
      return {
        ...state,
        isAuthError: true,
        isSubmiting: false,
      };
    case authActionTypes.REQUEST_AUTH_LOGOUT_START:
      return {
        ...state,
        isSubmiting: true,
      };
    case authActionTypes.REQUEST_AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthError: false,
        isSubmiting: false,
        isOnline: false,
        currentUser: {
          uid: null,
          avatar: null,
          fullname: null,
          likedTracks: null,
          downloadedTracks: null,
        },
      };
    case authActionTypes.REQUEST_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        isSubmiting: false,
        isAuthError: true,
      };
    case appActions.REQUEST_USER_DOWNLOAD_TRACK_START:
      const newPending: PendingDownloadsUIDsType = {
        uid: action.payload.id,
        status: downloadStatus.PENDING,
      };
      return {
        ...state,
        pendingDownloadsUIDs: [...state.pendingDownloadsUIDs, newPending],
      };
    case appActions.REQUEST_USER_DOWNLOAD_TRACK_SUCCESS:
      const pendingSuccessIndex = findIndex(
        state.pendingDownloadsUIDs,
        (val) => val.uid === action.payload.id
      );

      const cleanPendings =
        state.pendingDownloadsUIDs.length > 1
          ? [...state.pendingDownloadsUIDs].splice(pendingSuccessIndex, 1)
          : [];

      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          downloadedTracks: [...action.payload],
        },
        pendingDownloadsUIDs: cleanPendings,
      };
    case appActions.REQUEST_USER_DOWNLOAD_TRACK_ERROR:
      const pendingErrorIndex = findIndex(state.pendingDownloadsUIDs, (val) => {
        return val.uid === action.payload.id;
      });

      const newPendings =
        state.pendingDownloadsUIDs.length > 1
          ? [...state.pendingDownloadsUIDs].splice(pendingErrorIndex, 1)
          : [];

      return {
        ...state,
        pendingDownloadsUIDs: newPendings,
      };
    default:
      return state;
  }
};

export default appGlobalReducer;
