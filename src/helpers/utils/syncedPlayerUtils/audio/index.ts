import { changeProgressCurrentTime } from "helpers/utils";
import { UtilsResetAudioArgs } from "./types";

const resetAudio = ({
  audioRef,
  dispatch,
  isPlaying,
  playlistID,
  progressRef,
}: UtilsResetAudioArgs) => {
  if (playlistID === null || audioRef === null) return;

  audioRef.current?.pause();
  audioRef.current.currentTime = 0;
  audioRef.current.load();
  changeProgressCurrentTime(progressRef, 0);

  dispatch && dispatch();

  if (isPlaying) audioRef.current?.play();
};

export { resetAudio };
