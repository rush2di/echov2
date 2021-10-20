import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ICON_HEART, itemDecorator, itemIconDownload } from "./constants";
import { resolveReactionIcon } from "helpers/utils";
import { PlaylistItemProps } from "./types";
import "./styles.scss";

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
          <p className="txt-md txt-sec">{rank}</p>
          <img src={image} alt={title} />
          <FontAwesomeIcon icon={itemDecorator} />
        </div>
        <div className="playlistItem__body txt-btn">
          <p className="txt-md">{title}</p>
          <p className="txt-md">{artist}</p>
          <div className="reactions">
            <button className="like">
              <FontAwesomeIcon icon={[iconPrefix, ICON_HEART]} />
            </button>
            <button className="download">
              <FontAwesomeIcon icon={itemIconDownload} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
