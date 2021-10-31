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

const userChangeAlbum = () => {
  return {
    type: playerActions.USER_CHANGE_ALBUM,
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

export {
  userPlayTrack,
  userPauseTrack,
  userChangeTrack,
  userChangeAlbum,
  userSetPosition,
  userSetVolume,
  setPlayerState,
  userMuteVolume,
};
