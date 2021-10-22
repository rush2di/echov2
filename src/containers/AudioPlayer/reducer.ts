import { playerActions } from "./contants";
import { AudioPlayerState } from "./types";

const initState: AudioPlayerState = {
  currentTrackID: null,
  currentTrackDuration: 0,
  hasError: false,
  isPlaying: false,
  isMuted: false,
  playerVolume: 1,
};

const audioPlayerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case playerActions.USER_PLAY_TRACK:
      return { ...state, isPlaying: true };
    case playerActions.USER_PAUSE_TRACK:
      return { ...state, isPlaying: false };
    case playerActions.USER_SET_VOLUME:
      return { ...state, playerVolume: action.payload };
    case playerActions.USER_MUTE_VOLUME:
      console.log("called")
      return { ...state, isMuted: !state.isMuted };
    case playerActions.SET_TRACK_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default audioPlayerReducer;
