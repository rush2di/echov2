import { PlaylistDataType } from "containers/App/types";
import { Dispatch } from "redux";

export interface initHandleDownloadArgs {
  data: PlaylistDataType[];
  currentPlaylistID: string | number;
  currentTrackIndex: string | number;
}

export interface initHandleLikeArgs {
  targetID: string;
}
