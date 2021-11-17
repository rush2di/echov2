export interface AppStateType {
  isLoading: boolean | null;
  isError: boolean | null;
  data: PlaylistDataType[] | null;
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
  artist_picture: string;
  title: string;
  yt_link: string;
  yt_title: string;
  preview: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  artist_id?: string | number;
}

export interface AppRoutesProps {
  data: PlaylistDataType[];
  defaultPlaylist: string | number;
}
