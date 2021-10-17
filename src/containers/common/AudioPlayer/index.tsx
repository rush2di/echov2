import { useRef, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlayerButton, { PlayerButtonProps } from "components/PlayerBtn";
import PlayerInfo from "components/PlayerInfo";
import Progress from "components/Progress";
import Volume from "components/Volume";

import {
  playerInfoDefaults,
  playerButtonsDefaults,
  playerReactionsDefaults,
} from "./contants";
import "./styles.scss";
import { AudioPlayerState } from "./types";
import { setTrackState, userPauseTrack, userPlayTrack } from "./actions";
import { toPercentage } from "helpers/utils";

const audio =
  "https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-3.mp3";

const AudioPlayer = () => {
  const dispatch = useDispatch();

  const { isPlaying, currentTrackDuration } = useSelector(
    (state: { player: AudioPlayerState }) => state.player
  );

  const savedVolumeRef = useRef() as MutableRefObject<any>;
  const animationRef = useRef() as MutableRefObject<any>;
  const progressRef = useRef() as MutableRefObject<HTMLDivElement>;
  const volumeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const handleMetada = () => {
    savedVolumeRef.current = audioRef.current.volume;
    dispatch(
      setTrackState({
        currentTrackID: 1,
        currentTrackDuration: audioRef.current.duration,
        hasError: false,
      })
    );
  };

  const handleError = () => {
    dispatch(
      setTrackState({
        currentTrackID: null,
        currentTrackDuration: 0,
        hasError: true,
      })
    );
  };

  const whilePlaying = () => {
    const liveProgress = toPercentage(
      audioRef.current.currentTime,
      currentTrackDuration
    );
    changeProgressCurrentTime(liveProgress);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgressCurrentTime = (liveProgress: number) => {
    progressRef.current.style.width = `${liveProgress}%`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch(userPauseTrack());
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      dispatch(userPlayTrack());
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const handleSeekTo = (event) => {
    const inputRange = (audioRef.current.duration / 100) * event.target.value;
    audioRef.current.currentTime = inputRange;
    changeProgressCurrentTime(inputRange);
  };

  const handleVolumeChange = (event) => {
    volumeRef.current.style.width = `${event.target.value}%`;
    audioRef.current.volume = event.target.value / 100;
  };

  const playButtonProps: PlayerButtonProps = {
    ...playerButtonsDefaults[2],
    icon: isPlaying ? "pause" : "play",
    onClick: togglePlayPause,
  };

  return (
    <div className="audioPlayer">
      <audio
        onLoadedMetadata={handleMetada}
        onError={handleError}
        ref={audioRef}
      >
        <source src={audio} type="audio/mp3" />
      </audio>
      <div className="audioPlayer__head px-2 py-1">
        <PlayerInfo {...playerInfoDefaults} />
      </div>
      <div className="audioPlayer__body">
        <div className="audioPlayer__buttons">
          <PlayerButton {...playerButtonsDefaults[0]} />
          <PlayerButton {...playerButtonsDefaults[1]} />
          <PlayerButton {...playButtonProps} />
          <PlayerButton {...playerButtonsDefaults[3]} />
          <PlayerButton {...playerButtonsDefaults[4]} />
        </div>
        <div className="audioPlayer__progress mx-2">
          <Progress ref={progressRef} onChange={handleSeekTo} />
        </div>
        <div className="audioPlayer__volume">
          <Volume ref={volumeRef} onChange={handleVolumeChange} />
        </div>
        <div className="audioPlayer__reactions">
          <PlayerButton {...playerReactionsDefaults[0]} />
          <PlayerButton {...playerReactionsDefaults[1]} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
