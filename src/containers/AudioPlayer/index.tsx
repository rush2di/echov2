import { useRef, MutableRefObject, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import _ from "lodash";

import { PlayerButtonProps } from "components/PlayerBtn/types";
import { PlayerInfoProps } from "components/PlayerInfo/types";
import PlayerButton from "components/PlayerBtn";
import PlayerInfo from "components/PlayerInfo";
import Progress from "components/Progress";
import Volume from "components/Volume";

import {
  changeProgressCurrentTime,
  resetAudio,
  toPercentage,
  playlistFilter,
  startDownload,
} from "helpers/utils";
import { selectAppState } from "containers/App/selectors";
import { AppStateType } from "containers/App/types";

import {
  setPlayerState,
  userChangeTrack,
  userMuteVolume,
  userPauseTrack,
  userPlayTrack,
  userSetVolume,
} from "./actions";
import { playerButtonsDefaults, playerReactionsDefaults } from "./contants";
import { findAudioSrc, findTrackInfo } from "./utils";
import { selectPlayerState } from "./selectors";
import { AudioPlayerState } from "./types";
import "./styles.scss";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<{ id: string }>("/playlist/:id");
  const { data } = useSelector<AppStateType, AppStateType>(selectAppState);
  const {
    isMuted,
    hasError,
    isPlaying,
    playerVolume,
    currentPlaylistID,
    currentTrackIndex,
    currentTrackDuration,
  } = useSelector<AudioPlayerState, AudioPlayerState>(selectPlayerState);

  const savedVolumePositionRef = useRef() as MutableRefObject<any>;
  const savedVolumeRef = useRef() as MutableRefObject<any>;
  const animationRef = useRef() as MutableRefObject<any>;
  const progressRef = useRef() as MutableRefObject<HTMLDivElement>;
  const volumeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const playlistRef = useRef() as MutableRefObject<string>;
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const handleMetada = () => {
    savedVolumeRef.current = audioRef.current.volume;
    savedVolumePositionRef.current = `100%`;
    dispatch(
      setPlayerState({
        currentTrackDuration: audioRef.current.duration,
        hasError: false,
      })
    );
  };

  const handleError = () => {
    dispatch(
      setPlayerState({
        hasError: true,
      })
    );
  };

  const whilePlaying = () => {
    const liveProgress = toPercentage(
      audioRef.current.currentTime,
      currentTrackDuration
    );
    changeProgressCurrentTime(progressRef, liveProgress);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    if (currentPlaylistID === null || data === null) return;
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
    if (currentPlaylistID === null || data === null) return;
    const inputRange =
      (audioRef.current.duration / 100) * parseInt(event.currentTarget.value);
    audioRef.current.currentTime = inputRange;
    changeProgressCurrentTime(progressRef, inputRange);
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickValue = event.currentTarget.value;
    const newVolumeValue = parseInt(event.currentTarget.value) / 100;

    savedVolumePositionRef.current = `${clickValue}%`;
    volumeRef.current.style.width = `${clickValue}%`;
    audioRef.current.volume = newVolumeValue;
    dispatch(userSetVolume(newVolumeValue));
  };

  const handleNextButton = () => {
    if (currentPlaylistID === null || data === null) return;

    const trackIndex = currentTrackIndex as number;
    const nextIndex = trackIndex + 1;
    const lengthLimit = playlistFilter(data, currentPlaylistID).tracks.length;
    const handleLimit = trackIndex < lengthLimit - 1 ? nextIndex : 0;

    dispatch(userChangeTrack(handleLimit));
    resetAudio({
      playlistID: currentPlaylistID,
      audioRef: audioRef,
      isPlaying: isPlaying,
      progressRef,
      dispatch: () =>
        dispatch(setPlayerState({ currentTrackIndex: handleLimit })),
    });
  };

  const handlePrevButton = () => {
    if (currentPlaylistID === null || data === null) return;

    const trackIndex = currentTrackIndex as number;
    const prevIndex = trackIndex - 1;
    const lengthLimit = playlistFilter(data, currentPlaylistID).tracks.length;
    const handleLimit = trackIndex > 0 ? prevIndex : lengthLimit - 1;

    dispatch(userChangeTrack(handleLimit));
    resetAudio({
      playlistID: currentPlaylistID,
      isPlaying: isPlaying,
      progressRef,
      audioRef,
      dispatch: () =>
        dispatch(setPlayerState({ currentTrackIndex: handleLimit })),
    });
  };

  const toggleMuteVolume = () => {
    const savedPosition = savedVolumePositionRef.current;
    const currentPosition = volumeRef.current.style.width;

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

  const handleDownload = () => {
    if (currentPlaylistID === null || data === null) return;
    const currentPlaylist = playlistFilter(data, currentPlaylistID);
    const currentTrack = currentPlaylist.tracks[currentTrackIndex as number];
    startDownload(currentTrack.id);
  };

  useEffect(() => {
    const playlistID = match && match.params.id;
    const doUpdate = playlistID !== playlistRef.current;

    if (match !== null) {
      playlistRef.current = `${playlistID}`;
      const newState = {
        currentPlaylistID: playlistID,
        currentTrackIndex: 0,
      };
      if (doUpdate) {
        resetAudio({
          playlistID: currentPlaylistID,
          progressRef,
          audioRef,
        });
        dispatch(userPauseTrack());
        dispatch(setPlayerState(newState));
      }
    }
  }, [match]);

  useEffect(() => {
    if (hasError) handleNextButton();
  }, [hasError]);

  const playButtonProps: PlayerButtonProps = {
    ...playerButtonsDefaults[2],
    icon: isPlaying ? "pause" : "play",
    onClick: togglePlayPause,
  };

  const trackInfoProps: PlayerInfoProps = findTrackInfo(
    data,
    currentPlaylistID,
    currentTrackIndex
  );

  return (
    <div className="audioPlayer">
      {!!currentPlaylistID && (
        <audio
          onLoadedMetadata={handleMetada}
          onEnded={handleNextButton}
          onError={handleError}
          ref={audioRef}
        >
          <source
            src={findAudioSrc(data, currentPlaylistID, currentTrackIndex)}
            type="audio/mp3"
          />
        </audio>
      )}
      <div className="audioPlayer__head px-2 pl-md-2 pr-md-1 py-1">
        <PlayerInfo
          {...{ ...trackInfoProps, visibility: !!currentPlaylistID }}
        />
      </div>
      <div className="audioPlayer__body">
        <div className="audioPlayer__buttons">
          <PlayerButton {...playerButtonsDefaults[0]} />
          <PlayerButton
            onClick={handlePrevButton}
            {...playerButtonsDefaults[1]}
          />
          <PlayerButton {...playButtonProps} />
          <PlayerButton
            onClick={handleNextButton}
            {...playerButtonsDefaults[3]}
          />
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
          <PlayerButton
            {...playerReactionsDefaults[1]}
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
