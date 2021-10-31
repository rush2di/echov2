import { PlaylistDataType, TrackDataType } from "containers/App/types";
import _ from "lodash";

const ITERATION_LIMIT = 12;

const extractFeaturedArtists = (tracks: TrackDataType[]) => {
  const artistsArray = tracks
    .slice(0, ITERATION_LIMIT)
    .map(({ artist_name }) => artist_name);

  return _.uniq(artistsArray);
};

const extractImageSizes = (data: PlaylistDataType) => {
  return `${data.picture_medium} 320w, ${data.picture_big} 700w, ${data.picture_xl} 2000w`;
};

export { extractFeaturedArtists, extractImageSizes };
