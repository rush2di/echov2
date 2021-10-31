import { PlayerButtonProps } from "components/PlayerBtn/types";
import { PlayerInfoProps } from "components/PlayerInfo/types";

import image from "assets/images/album_cover.png";

const playerInfoDefaults = {
  image,
  title: "loading...",
  artist: "loading...",
} as PlayerInfoProps;

const playerButtonsDefaults: PlayerButtonProps[] = [
  { type: "sm", icon: "random" },
  { type: "md", icon: "backward" },
  { type: "lg", icon: "play" },
  { type: "md", icon: "forward" },
  { type: "sm", icon: "retweet" },
];

const playerReactionsDefaults: PlayerButtonProps[] = [
  { type: "sm", icon: "heart", isHeart: true },
  { type: "sm", icon: "download" },
];

const playerActions = {
  USER_PLAY_TRACK: "USER_PLAY_TRACK",
  USER_PAUSE_TRACK: "USER_PAUSE_TRACK",
  USER_CHANGE_TRACK: "USER_CHANGE_TRACK",
  USER_CHANGE_ALBUM: "USER_CHANGE_ALBUM",
  USER_SET_POSITION: "USER_SET_POSITION",
  USER_MUTE_VOLUME: "USER_MUTE_VOLUME",
  USER_SET_VOLUME: "USER_SET_VOLUME",
  SET_TRACK_STATE: "SET_TRACK_STATE",
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
  playerButtonsDirections
};
