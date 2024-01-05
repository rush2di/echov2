import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ICON_HEART,
  ACTIVE_CLASSNAME,
  DEFAULT_CLASSNAME,
  itemDecorator,
  itemIconPending,
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
  isPending = false,
}: PlaylistItemProps) => {
  const iconPrefix = resolveReactionIcon(true, isLiked);
  const stylesLogic = isActive ? ACTIVE_CLASSNAME : DEFAULT_CLASSNAME;

  return (
    <div
      id={id}
      tabIndex={index}
      className={`playlistItem ${stylesLogic}`}
      onClick={onClick}
    >
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
            {/* <button
              tabIndex={index}
              className="like"
              onClick={(e) => handleLikeReaction(e, id)}
            >
              <FontAwesomeIcon icon={[iconPrefix, ICON_HEART]} />
            </button> */}
            <button
              tabIndex={index}
              className="download"
              onClick={handleDownload}
            >
              <FontAwesomeIcon
                icon={isPending ? itemIconPending : itemIconDownload}
                spin={isPending}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
