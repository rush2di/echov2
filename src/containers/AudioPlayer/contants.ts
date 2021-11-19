import { PlayerButtonProps } from "components/PlayerBtn/types";
import { PlayerInfoProps } from "components/PlayerInfo/types";

import image from "assets/images/album_cover.png";

const playerInfoDefaults = {
  image,
  title: "loading...",
  artist: "loading...",
} as PlayerInfoProps;

const playerButtonsDefaults: PlayerButtonProps[] = [
  { trackID: null, type: "sm", icon: "random" },
  { trackID: null, type: "md", icon: "backward" },
  { trackID: null, type: "lg", icon: "play" },
  { trackID: null, type: "md", icon: "forward" },
  { trackID: null, type: "sm", icon: "retweet" },
];

const playerReactionsDefaults: PlayerButtonProps[] = [
  { trackID: null, type: "sm", icon: "heart", isHeart: true },
  { trackID: null, type: "sm", icon: "download" },
];

const playerActions = {
  USER_PLAY_TRACK: "USER_PLAY_TRACK",
  USER_PAUSE_TRACK: "USER_PAUSE_TRACK",
  USER_CHANGE_TRACK: "USER_CHANGE_TRACK",
  USER_SELECT_PLAYLIST: "USER_SELECT_PLAYLIST",
  USER_SET_POSITION: "USER_SET_POSITION",
  USER_MUTE_VOLUME: "USER_MUTE_VOLUME",
  USER_SET_VOLUME: "USER_SET_VOLUME",
  SET_TRACK_STATE: "SET_TRACK_STATE",
  SET_DEFAULT_PLAYLIST: "SET_DEFAULT_PLAYLIST",
};

const playerButtonsDirections = {
  forward: "forward",
  backward: "backward",
};

export {
  playerInfoDefaults,
  playerButtonsDefaults,
  playerReactionsDefaults,
  playerActions,
  playerButtonsDirections,
};
