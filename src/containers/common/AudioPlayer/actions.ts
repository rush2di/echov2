import { playerActions } from "./contants";
import { SetTrackStatePayload } from "./types";

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

const userChangeTrack = (payload: "forward" | "backward") => {
  return {
    type: playerActions.USER_PAUSE_TRACK,
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

const setTrackState = (payload: SetTrackStatePayload) => {
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
  setTrackState
};
