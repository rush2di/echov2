import { PlaylistDataType, TrackDataType } from "containers/App/types";
import { matchKeys } from "helpers/utils/obj";
import _ from "lodash";

const ITERATION_LIMIT = 12;

const extractFeaturedArtists = (tracks: TrackDataType[]) => {
  const artistsArray = tracks
    .slice(0, ITERATION_LIMIT)
    .map(({ artist_name }) => artist_name);

  return _.uniq(artistsArray);
};

const extractImageSizes = (data: PlaylistDataType): string => {
  return `${data.picture_medium} 320w, ${data.picture_big} 700w, ${data.picture_xl} 2000w`;
};

const fixImageFormat = (
  data: PlaylistDataType[],
  isArr: boolean = false
): PlaylistDataType[] | PlaylistDataType => {
  const fields = [
    "picture",
    "picture_big",
    "picture_medium",
    "picture_small",
    "picture_xl",
  ];

  const res = data.map((obj) => {
    if (matchKeys(obj, fields)) {
      fields.forEach((key) => (obj[key] = obj[key].replace("f_auto", "f_jpg")));
    }
    return obj;
  });

  return isArr ? res : res[0];
};

export { extractFeaturedArtists, extractImageSizes, fixImageFormat };
