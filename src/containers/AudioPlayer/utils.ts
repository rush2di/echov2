import { playlistFilter } from "helpers/utils/";
import { PlayerInfoProps } from "components/PlayerInfo/types";
import { playerInfoDefaults } from "./contants";

import fallbackCover from "assets/images/album_cover.png";

const findAudioSrc = (data, currentPlaylistID, currentTrackIndex) => {
  if (data === null || currentPlaylistID === null) return "";

  const newPlaylist = playlistFilter(data, currentPlaylistID);
  return newPlaylist.tracks[currentTrackIndex].preview;
};

const findTrackInfo = (data, currentPlaylistID, currentTrackIndex) => {
  if (data === null || currentPlaylistID === null) return playerInfoDefaults;

  const newPlaylist = playlistFilter(data, currentPlaylistID);
  const {
    artist_name,
    title,
    image = fallbackCover,
  } = newPlaylist.tracks[currentTrackIndex];
  return { artist: artist_name, title, image } as PlayerInfoProps;
};

export { findAudioSrc, findTrackInfo };
