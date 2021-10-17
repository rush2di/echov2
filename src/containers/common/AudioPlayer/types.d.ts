export interface AudioPlayerState {
  currentTrackID: string | null;
  currentTrackDuration: number;
  hasError: boolean;
  isPlaying: boolean;
  playerVolume: number | null;
}

export interface SetTrackStatePayload {
  currentTrackID: number | null;
  currentTrackDuration: number;
  hasError: boolean;
}
