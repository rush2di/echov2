import { useRef, MutableRefObject, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PlayerButtonProps } from "components/PlayerBtn/types";
import PlayerButton from "components/PlayerBtn";
import PlayerInfo from "components/PlayerInfo";
import Progress from "components/Progress";
import Volume from "components/Volume";

import {
  playerInfoDefaults,
  playerButtonsDefaults,
  playerReactionsDefaults,
} from "./contants";
import {
  setTrackState,
  userMuteVolume,
  userPauseTrack,
  userPlayTrack,
  userSetVolume,
} from "./actions";
import { toPercentage } from "helpers/utils";
import { AudioPlayerState } from "./types";
import "./styles.scss";

const audio =
  "https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-3.mp3";

const AudioPlayer = () => {
  const dispatch = useDispatch();

  const { isPlaying, currentTrackDuration, playerVolume, isMuted } =
    useSelector((state: { player: AudioPlayerState }) => state.player);

  const savedVolumePositionRef = useRef() as MutableRefObject<any>;
  const savedVolumeRef = useRef() as MutableRefObject<any>;
  const animationRef = useRef() as MutableRefObject<any>;
  const progressRef = useRef() as MutableRefObject<HTMLDivElement>;
  const volumeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const handleMetada = () => {
    savedVolumeRef.current = audioRef.current.volume;
    savedVolumePositionRef.current = `100%`;
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

  const handleSeekTo = (event: ChangeEvent<HTMLInputElement>) => {
    const inputRange =
      (audioRef.current.duration / 100) * parseInt(event.currentTarget.value);
    audioRef.current.currentTime = inputRange;
    changeProgressCurrentTime(inputRange);
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickValue = event.currentTarget.value;
    const newVolumeValue = parseInt(event.currentTarget.value) / 100;

    savedVolumePositionRef.current = `${clickValue}%`;
    volumeRef.current.style.width = `${clickValue}%`;
    audioRef.current.volume = newVolumeValue;
    dispatch(userSetVolume(newVolumeValue));
  };

  const toggleMuteVolume = () => {
    const savedPosition = savedVolumePositionRef.current;
    const currentPosition = volumeRef.current.style.width;

    console.log({ savedPosition, currentPosition, ref: volumeRef.current });

    if (isMuted) {
      volumeRef.current.style.width = savedPosition;
      audioRef.current.volume = playerVolume || 1;
    } else {
      savedVolumePositionRef.current = currentPosition;
      volumeRef.current.style.width = `0%`;
      audioRef.current.volume = 0;
    }
    dispatch(userMuteVolume());
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
          <Volume
            ref={volumeRef}
            isMuted={isMuted}
            onChange={handleVolumeChange}
            onClick={toggleMuteVolume}
          />
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
