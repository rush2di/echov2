import { playerActions, playerButtonsDirections } from "./contants";
import { SetPlayerStatePayload } from "./types";

const userPlayTrack = () => {
  return {
    type: playerActions.USER_PLAY_TRACK,
  };
};

const userPauseTrack = () => {
  return {
    type: playerActions.USER_PAUSE_TRACK,
  };
};

const userChangeTrack = (payload: number) => {
  return {
    type: playerActions.USER_CHANGE_TRACK,
    payload,
  };
};

const userSelectPlaylist = (payload: string | number) => {
  return {
    type: playerActions.USER_SELECT_PLAYLIST,
    payload,
  };
};

const userSetPosition = (payload: number) => {
  return {
    type: playerActions.USER_SET_POSITION,
    payload,
  };
};

const userSetVolume = (payload: number) => {
  return {
    type: playerActions.USER_SET_VOLUME,
    payload,
  };
};

const userMuteVolume = () => {
  return {
    type: playerActions.USER_MUTE_VOLUME,
  };
};

const setPlayerState = (payload: SetPlayerStatePayload) => {
  return {
    type: playerActions.SET_TRACK_STATE,
    payload,
  };
};

const setDefaultPlaylist = (payload: string | number) => {
  return {
    type: playerActions.SET_DEFAULT_PLAYLIST,
    payload,
  };
};

export {
  userPlayTrack,
  userPauseTrack,
  userChangeTrack,
  userSelectPlaylist,
  userSetPosition,
  userSetVolume,
  setPlayerState,
  userMuteVolume,
  setDefaultPlaylist
};
