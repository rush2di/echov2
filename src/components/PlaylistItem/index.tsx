import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveReactionIcon } from "helpers/utils";

import "./styles.scss";

export interface PlaylistItemProps {
  rank: string;
  image: string;
  title: string;
  artist: string;
  isLiked: boolean;
}

const PlaylistItem = ({
  rank,
  image,
  title,
  artist,
  isLiked,
}: PlaylistItemProps) => {
  const iconPrefix = resolveReactionIcon(true, isLiked);

  return (
    <div className="playlistItem">
      <div className="playlistItem__flex">
        <div className="playlistItem__head txt-btn">
          <p  className="txt-md txt-sec">{rank}</p>
          <img src={image} alt={title} />
          <FontAwesomeIcon icon={["fas", "caret-right"]} />
        </div>
        <div className="playlistItem__body txt-btn">
          <p className="txt-md">{title}</p>
          <p className="txt-md">{artist}</p>
          <div className="reactions">
            <button className="like">
              <FontAwesomeIcon icon={[iconPrefix, "heart"]} />
            </button>
            <button className="download">
              <FontAwesomeIcon icon={["fas", "download"]} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
