import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ACTIVE_CLASSNAME,
  DEFAULT_CLASSNAME,
  ICON_HEART,
  itemDecorator,
  itemIconDownload,
} from "./constants";
import { resolveReactionIcon } from "helpers/utils";
import { PlaylistItemProps } from "./types";
import "./styles.scss";

const PlaylistItem = ({
  id,
  rank,
  image,
  title,
  index,
  artist,
  isLiked,
  isActive,
  onClick,
  handleDownload,
  handleLikeReaction,
}: PlaylistItemProps) => {
  const iconPrefix = resolveReactionIcon(true, isLiked);
  const stylesLogic = isActive ? ACTIVE_CLASSNAME : DEFAULT_CLASSNAME;

  return (
    <div tabIndex={index} id={id} className={`playlistItem ${stylesLogic}`} onClick={onClick}>
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
            <button className="like" onClick={(e) => handleLikeReaction(e, id)}>
              <FontAwesomeIcon icon={[iconPrefix, ICON_HEART]} />
            </button>
            <button className="download" onClick={handleDownload}>
              <FontAwesomeIcon icon={itemIconDownload} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
