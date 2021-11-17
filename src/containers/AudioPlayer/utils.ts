import { playlistFilter } from "helpers/utils/";
import { PlayerInfoProps } from "components/PlayerInfo/types";
import { playerInfoDefaults } from "./contants";

const findAudioSrc = (data, currentPlaylistID, currentTrackIndex) => {
  if (data === null || currentPlaylistID === null) return "";

  const newPlaylist = playlistFilter(data, currentPlaylistID);
  return newPlaylist.tracks[currentTrackIndex].preview;
};

const findTrackInfo = (data, currentPlaylistID, currentTrackIndex) => {
  if (data === null || currentPlaylistID === null) return playerInfoDefaults;

  const currentPlaylist = playlistFilter(data, currentPlaylistID).tracks[currentTrackIndex];
  const { artist_name, title, cover_medium } = currentPlaylist;

  return {
    title,
    artist: artist_name,
    image: cover_medium,
  } as PlayerInfoProps;
};

export { findAudioSrc, findTrackInfo };
