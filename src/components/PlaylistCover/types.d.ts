export interface PlaylistCoverProps {
  type: "stacked" | "card";
  title: string;
  text?: string;
  artists: string[];
  img: string;
}
