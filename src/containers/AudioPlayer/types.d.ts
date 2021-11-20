import { PlaylistDataType, TrackDataType } from "containers/App/types";
import { MutableRefObject } from "react";

export interface AudioPlayerState {
  defaultPlaylistID: string | number | null;
  currentPlaylistID: string | number | null;
  currentTrackIndex: number | null;
  currentTrackDuration: number;
  hasError: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  playerVolume: number | null;
}

export interface SetPlayerStatePayload {
  currentPlaylistID?: string | number | null;
  currentTrackIndex?: number | null;
  currentTrackDuration?: number;
  hasError?: boolean;
}

export interface AudioPlayerUtilsArgs {
  data: PlaylistDataType[] | null;
  currentPlaylistID: string | number | null;
  currentTrackIndex: number | null;
}
