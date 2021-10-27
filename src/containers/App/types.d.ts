export interface AppStateType {
  data: PlaylistDataType[] | null;
  isLoading: boolean | null;
  isError: boolean | null;
}

export interface PlaylistDataType {
  id: number;
  last_update: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  title: string;
  tracks: TrackDataType[];
}

export interface TrackDataType {
  id: string;
  rank: number;
  artist_name: string;
  title: string;
  yt_link: string;
  yt_title: string;
}
