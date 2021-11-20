export interface UtilsResetAudioArgs {
  progressRef: MutableRefObject<HTMLDivElement> | any;
  audioRef: MutableRefObject<HTMLAudioElement> | any;
  playlistID: number | string | null;
  isPlaying?: boolean;
  dispatch?: any;
}
