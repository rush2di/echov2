import { PlayerButtonProps } from "components/PlayerBtn";
import { PlayerInfoProps } from "components/PlayerInfo";

import image from "assets/album_cover.png";

const playerInfoDefaults: PlayerInfoProps = {
  image,
  title: "Blinding Lights",
  artist: "The Weekend",
};

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
  USER_SET_POSITION: "USER_SEEK_INPUT",
  USER_SET_VOLUME: "USER_VOLUME_INPUT",
  SET_TRACK_STATE: "SET_TRACK_STATE",
};

export {
  playerInfoDefaults,
  playerButtonsDefaults,
  playerReactionsDefaults,
  playerActions,
};
