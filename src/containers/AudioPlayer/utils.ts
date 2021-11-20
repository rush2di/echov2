import { playlistFilter } from "helpers/utils/";
import { PlayerInfoProps } from "components/PlayerInfo/types";
import { playerInfoDefaults } from "./contants";
import { AudioPlayerUtilsArgs } from "./types";

const findAudioSrc = ({
  data,
  currentPlaylistID,
  currentTrackIndex,
}: AudioPlayerUtilsArgs) => {
  if (data === null || currentPlaylistID === null) return "";

  const newPlaylist = playlistFilter(data, currentPlaylistID);
  return newPlaylist.tracks[currentTrackIndex as number].preview;
};

const findTrackInfo = ({
  data,
  currentPlaylistID,
  currentTrackIndex,
}: AudioPlayerUtilsArgs) => {
  if (data === null || currentPlaylistID === null) return playerInfoDefaults;

  const currentPlaylist = playlistFilter(data, currentPlaylistID).tracks[
    currentTrackIndex as number
  ];
  const { artist_name, title, cover_medium } = currentPlaylist;

  return {
    title,
    artist: artist_name,
    image: cover_medium,
  } as PlayerInfoProps;
};

export { findAudioSrc, findTrackInfo };
