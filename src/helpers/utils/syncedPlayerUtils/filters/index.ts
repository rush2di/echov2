import { PlaylistDataType } from "containers/App/types";
import { extractTrackIDArgs } from "./types";

const playlistFilter = (
  data: PlaylistDataType[],
  currentPlaylistID: string | number
): PlaylistDataType => {
  return data.filter((val) => val.id == currentPlaylistID)[0];
};

const extractTrackID = ({
  data,
  currentPlaylistID,
  currentTrackIndex,
}: extractTrackIDArgs) => {
  if (data === null || currentPlaylistID === null) return null;

  const filtredPlaylist = playlistFilter(data, currentPlaylistID);

  return filtredPlaylist.tracks[currentTrackIndex as number].id;
};

export { playlistFilter, extractTrackID };
