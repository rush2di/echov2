import { TrackDataType } from "containers/App/types";
import _ from "lodash";

const ITERATION_LIMIT = 12;

const extractFeaturedArtists = (tracks: TrackDataType[]) => {
  const artistsArray = tracks
    .slice(0, ITERATION_LIMIT)
    .map(({ artist_name }) => artist_name);

  return _.uniq(artistsArray);
};

export { extractFeaturedArtists };
