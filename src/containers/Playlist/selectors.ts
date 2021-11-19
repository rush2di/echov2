import { AudioPlayerState } from "containers/AudioPlayer/types";
import { createSelector } from "reselect";

const selectPlayerState = (globalState): AudioPlayerState => globalState.player;

const makeSelectPlaylistID = () => {
  return createSelector(
    selectPlayerState,
    ({ currentPlaylistID }: AudioPlayerState) => {
      return currentPlaylistID;
    }
  );
};

const makeSelectTrackIndex = () => {
  return createSelector(
    selectPlayerState,
    ({ currentTrackIndex }: AudioPlayerState) => {
      return currentTrackIndex;
    }
  );
};

const makeSelectPlayerState = () => {
  return createSelector(
    selectPlayerState,
    ({ isPlaying }: AudioPlayerState) => {
      return isPlaying;
    }
  );
};

export { makeSelectPlaylistID, makeSelectTrackIndex, makeSelectPlayerState };
