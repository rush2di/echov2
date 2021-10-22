export interface AudioPlayerState {
  currentTrackID: string | null;
  currentTrackDuration: number;
  hasError: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  playerVolume: number | null;
}

export interface SetTrackStatePayload {
  currentTrackID: number | null;
  currentTrackDuration: number;
  hasError: boolean;
}
