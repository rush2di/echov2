import { filter, find, some, uniqBy } from "lodash";

import store from "store/store";
import {
  requestDownloadStart,
  requestUserLikeStart,
} from "containers/App/actions";
import { playlistFilter } from "helpers/utils";
import { PlaylistDataType, TrackDataType } from "containers/App/types";

import { initHandleDownloadArgs, initHandleLikeArgs } from "./types";
import { toast } from "react-toastify";

const initHandleDownload = ({
  data,
  currentPlaylistID,
  currentTrackIndex,
}: initHandleDownloadArgs) => {
  const currentPlaylist = playlistFilter(data, currentPlaylistID);
  const currentTrack = currentPlaylist.tracks[currentTrackIndex as number];

  store.dispatch(requestDownloadStart(currentTrack));
};

const initHandleLike = ({
  currentPlaylistID,
  targetID,
  data,
}: initHandleLikeArgs) => {
  const { currentUser } = store.getState().app;

  if (currentUser.uid === null) toast.info("You need to have an account first");

  const storedLikes = currentUser.likedTracks;
  const currentPlaylist = playlistFilter(data, currentPlaylistID);
  const trackData = find(currentPlaylist.tracks, ["id", targetID]);

  if (!trackData) return;

  const likeExists = some(storedLikes, ["id", targetID]);
  const removeLike: TrackDataType[] = filter(storedLikes, ["id", trackData]);
  const addLike: TrackDataType[] = uniqBy([...storedLikes, trackData], "id");

  const newLikes = likeExists ? removeLike : addLike;
  store.dispatch(requestUserLikeStart(newLikes));
};

export { initHandleDownload, initHandleLike };
