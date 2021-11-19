import { downloadStatus } from "./constants";

export interface AppStateType {
  currentUser: userDataType<string | null, TrackDataType[] | null>;
  data: PlaylistDataType[] | null;
  isError: boolean | null;
  isOnline: boolean | null;
  isLoading: boolean | null;
  isAuthError: boolean | null;
  isSubmiting: boolean | null;
  pendingDownloadUIDs: PendingDownloadsUIDsType[];
}

export interface PendingDownloadsUIDsType {
  uid: string;
  status: typeof downloadStatus.PENDING | typeof downloadStatus.ERROR;
}

export interface PlaylistDataType {
  id: number;
  title: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracks: TrackDataType[];
  last_update: string;
}

export interface TrackDataType {
  id: string;
  rank: number;
  title: string;
  yt_link: string;
  yt_title: string;
  artist_id?: string | number;
  artist_name: string;
  artist_picture: string;
  preview: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
}

export interface AppRoutesProps {
  data: PlaylistDataType[];
  defaultPlaylist: string | number;
}

export interface userDataType<T, L> {
  fullname: T;
  avatar: T;
  likedTracks: L;
  downloadedTracks: L;
}
