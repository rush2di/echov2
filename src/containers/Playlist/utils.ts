import { TrackDataType } from "containers/App/types";
import _ from "lodash";
import {
  UTILS_PARAMS_SEPARETOR,
  UTILS_PARAMS_SLICE_LIMIT,
  UTILS_PARAMS_UNIQUE_PROP,
} from "./constants";

const artistsSum = (tracks: TrackDataType[] | undefined) => {
  if (!tracks) return;

  const playlistChunk = _.uniqBy(tracks, UTILS_PARAMS_UNIQUE_PROP);

  const sum = playlistChunk.map((val: TrackDataType) => {
    return val[UTILS_PARAMS_UNIQUE_PROP];
  }).length;

  return sum;
};

const topArtistsTracks = (tracks: TrackDataType[] | undefined) => {
  if (!tracks) return;

  const uniqueArtists = _.uniqBy(
    tracks.slice(0, UTILS_PARAMS_SLICE_LIMIT),
    UTILS_PARAMS_UNIQUE_PROP
  );

  const chunks = uniqueArtists.map(({ artist_name }) => {
    let newTracks: TrackDataType[] | null = null;

    const foundTracks = tracks.filter((track: TrackDataType) => {
      return track[UTILS_PARAMS_UNIQUE_PROP] == artist_name;
    });

    if (foundTracks.length > 4) {
      newTracks = foundTracks.slice(0, 4);
    } else {
      newTracks = foundTracks;
    }

    const tracksTitles = newTracks.map((track: TrackDataType) => track.title);

    return { artist_name, tracks: tracksTitles };
  });

  const sortedResults = _.sortBy(chunks, (val) => val.tracks.length)
    .reverse()
    .slice(0, 4)
    .map((val) => ({
      ...val,
      tracks: val.tracks.join(UTILS_PARAMS_SEPARETOR),
    }));

  return sortedResults;
};

export { artistsSum, topArtistsTracks };
