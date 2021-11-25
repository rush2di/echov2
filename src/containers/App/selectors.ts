import { createSelector } from "reselect";

import { AudioPlayerState } from "containers/AudioPlayer/types";
import {
  AppStateType,
  PendingDownloadsUIDsType,
  TrackDataType,
  UserDataType,
} from "./types";

const selectAppState = (globalState): AppStateType => globalState.app;
const selectPlayerState = (globalState): AudioPlayerState => globalState.player;

const makeSelectStartState = () => {
  return createSelector(
    selectAppState,
    ({ data, isLoading, isError, currentUser }: AppStateType) => {
      return { data, isLoading, isError, currentUser };
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

const makeSelectUser = () => {
  return createSelector(
    selectAppState,
    ({ currentUser }): UserDataType<string | null, TrackDataType[] | null> => {
      return currentUser;
    }
  );
};

const makeSelectUserDownloads = () => {
  return createSelector(
    selectAppState,
    ({ currentUser }): TrackDataType[] | null => {
      return currentUser.downloadedTracks;
    }
  );
};

const makeSelectUserLikes = () => {
  return createSelector(
    selectAppState,
    ({ currentUser }): TrackDataType[] | null => {
      return currentUser.likedTracks;
    }
  );
};

const makeSelectPendingDownloads = () => {
  return createSelector(
    selectAppState,
    ({ pendingDownloadsUIDs }): PendingDownloadsUIDsType[] => {
      return pendingDownloadsUIDs;
    }
  );
};

export {
  selectAppState,
  makeSelectUser,
  selectPlayerState,
  makeSelectStartState,
  makeSelectDefaultPlaylist,
  makeSelectPendingDownloads,
  makeSelectUserDownloads,
  makeSelectUserLikes,
};
