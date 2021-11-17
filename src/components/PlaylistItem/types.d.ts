import { MouseEventHandler } from "react";

export interface PlaylistItemProps {
  id: string;
  isActive: boolean;
  rank: string;
  image: string;
  title: string;
  artist: string;
  isLiked: boolean;
  onClick?(e: MouseEvent<HTMLDivElement>): void;
  handleDownload(e: MouseEvent<HTMLDivElement>): void;
  handleLikeReaction(e: MouseEvent<HTMLDivElement>, id: string): void;
}
