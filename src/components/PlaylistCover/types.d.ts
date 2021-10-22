import { CARD_UI, STACKED_UI } from "./constants";

export interface PlaylistCoverProps {
  type: typeof STACKED_UI | typeof CARD_UI;
  title: string;
  text?: string;
  artists: string[];
  img: string;
}
