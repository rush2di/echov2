import store from "store/store";
import {
  requestDownloadStart,
  requestUserLikeStart,
} from "containers/App/actions";
import { playlistFilter } from "helpers/utils";

import { initHandleDownloadArgs, initHandleLikeArgs } from "./types";

const initHandleDownload = ({
  data,
  currentPlaylistID,
  currentTrackIndex,
}: initHandleDownloadArgs) => {
  const currentPlaylist = playlistFilter(data, currentPlaylistID);
  const currentTrack = currentPlaylist.tracks[currentTrackIndex as number];

  store.dispatch(requestDownloadStart(currentTrack.id));
};

const initHandleLike = ({ targetID }: initHandleLikeArgs) => {
  store.dispatch(requestUserLikeStart(targetID));
};

export { initHandleDownload, initHandleLike };
