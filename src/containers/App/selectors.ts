import { createSelector } from "reselect";

import { AudioPlayerState } from "containers/AudioPlayer/types";
import { AppStateType } from "./types";

const selectAppState = (globalState): AppStateType => globalState.app;
const selectPlayerState = (globalState): AudioPlayerState => globalState.player;

const makeSelectStartState = () => {
  return createSelector(
    selectAppState,
    ({ data, isLoading, isError }: AppStateType) => {
      return { data, isLoading, isError };
    }
  );
};

const makeSelectDefaultPlaylist = () => {
  return createSelector(
    selectPlayerState,
    ({ defaultPlaylistID }: AudioPlayerState) => {
      return defaultPlaylistID;
    }
  );
};

export {
  selectAppState,
  selectPlayerState,
  makeSelectStartState,
  makeSelectDefaultPlaylist,
};
