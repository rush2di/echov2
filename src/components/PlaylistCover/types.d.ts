import { CARD_UI, STACKED_UI } from "./constants";

export interface PlaylistCoverProps {
  type: typeof STACKED_UI | typeof CARD_UI;
  title: string;
  text?: string;
  artists: string[];
  src: string;
  placeholder: string;
  srcSet: string;
  sizes?: string;
  id: string | number;
  onClick(id: string | number): void;
}

export interface parseFeaturedArtistsArgs {
  pattern: string;
  modifier: string;
  artists: string[];
}
