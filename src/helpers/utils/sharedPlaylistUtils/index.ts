import { PlaylistDataType } from "containers/App/types";
import { UtilsResetAudioArgs } from "containers/AudioPlayer/types";
import { MutableRefObject } from "react";
import { getDownloadTrack } from "service/axios";

const changeProgressCurrentTime = (
  progressRef: MutableRefObject<HTMLDivElement>,
  liveProgress?: number
) => {
  if (!progressRef.current) return;
  progressRef.current.style.width = `${liveProgress}%`;
};

const resetAudio = ({
  playlistID,
  audioRef,
  dispatch,
  isPlaying,
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

const playlistFilter = (
  data: PlaylistDataType[],
  currentPlaylistID: any
): PlaylistDataType => {
  return data.filter((val) => val.id == currentPlaylistID)[0];
};

const startDownload = (trackId: string) => {
  getDownloadTrack(trackId).then((res: any) => {
    const win = window.open(res.data.url, "_blank") as Window;
    win && win.focus();
  });
};

export { changeProgressCurrentTime, playlistFilter, resetAudio, startDownload };
