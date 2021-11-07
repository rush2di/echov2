import { authActionTypes } from "./constants";
import { AuthFormsReducerType } from "./type";

const initState: AuthFormsReducerType = {
  currentUser: {
    fullname: null,
    avatar: null,
    likedTracks: null,
    downloadedTracks: null,
  },
  formFields: {
    fullname: null,
    email: null,
    password: null,
  },
  isSubmiting: null,
  isOnline: null,
  hasError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authActionTypes.ON_AUTH_INPUT:
      return {
        ...state,
        formFields: { ...state.formFields, ...action.payload },
      };
    case authActionTypes.REQUEST_AUTH_REGISTER_START:
      return { ...state, isSubmiting: true };
    case authActionTypes.REQUEST_AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        isOnline: true,
        isSubmiting: false,
        currentUser: {
          fullname: action.payload.user_fullname,
          avatar: action.payload.user_avatar,
          likedTracks: action.payload.liked_tracks,
          downloadedTracks: action.payload.downloaded_tracks,
        },
        formFields: {
          fullname: null,
          email: null,
          password: null,
        },
      };
    case authActionTypes.REQUEST_AUTH_REGISTER_ERROR:
      return {
        ...state,
        hasError: true,
        isSubmiting: false,
      };
    case authActionTypes.REQUEST_AUTH_LOGIN_START:
      return { ...state, isSubmiting: true };
    case authActionTypes.REQUEST_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isOnline: true,
        isSubmiting: false,
        currentUser: {
          fullname: action.payload.user_fullname,
          avatar: action.payload.user_avatar,
          likedTracks: action.payload.liked_tracks,
          downloadedTracks: action.payload.downloaded_tracks,
        },
        formFields: {
          fullname: null,
          email: null,
          password: null,
        },
      };
    case authActionTypes.REQUEST_AUTH_LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
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
        isSubmiting: false,
        isOnline: true,
        currentUser: {
          fullname: null,
          avatar: null,
          likedTracks: null,
          downloadedTracks: null,
        },
      };
    case authActionTypes.REQUEST_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        isSubmiting: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default authReducer;
