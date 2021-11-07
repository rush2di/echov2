import { playerActions } from "./contants";
import { AudioPlayerState } from "./types";

const initState: AudioPlayerState = {
  defaultPlaylistID: null,
  currentPlaylistID: null,
  currentTrackIndex: null,
  currentTrackDuration: 0,
  hasError: false,
  isPlaying: false,
  isMuted: false,
  playerVolume: 1,
};

const audioPlayerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case playerActions.SET_DEFAULT_PLAYLIST:
      return { ...state, defaultPlaylistID: action.payload };
    case playerActions.USER_SELECT_PLAYLIST:
      return { ...state, currentPlaylistID: action.payload };
    case playerActions.USER_PLAY_TRACK:
      return { ...state, isPlaying: true };
    case playerActions.USER_PAUSE_TRACK:
      return { ...state, isPlaying: false };
    case playerActions.USER_SET_VOLUME:
      return { ...state, playerVolume: action.payload };
    case playerActions.USER_MUTE_VOLUME:
      return { ...state, isMuted: !state.isMuted };
    case playerActions.USER_CHANGE_TRACK:
      return { ...state, currentTrackIndex: action.payload };
    case playerActions.SET_TRACK_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default audioPlayerReducer;
