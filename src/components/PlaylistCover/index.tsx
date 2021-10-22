import InfoBadge from "components/InfoBadge";

import { BADGE_TEXT, STACKED_UI } from "./constants";
import { parseFeaturedArtists } from "./utils";
import { PlaylistCoverProps } from "./types";
import "./styles.scss";

const PlaylistCover = ({
  text = BADGE_TEXT,
  type,
  title,
  artists,
  img,
}: PlaylistCoverProps) => {
  const featuredArtists = parseFeaturedArtists({
    pattern: "Featuring #...",
    modifier: "#",
    artists,
  });

  const headingStyles = type === STACKED_UI ? "txt-h6 txt-prim" : "txt txt-sec";

  return (
    <div className={`playlistCover --${type}`}>
      <div className="playlistCover__background">
        <img src={img} alt={title} />
        <div className="overlay" />
      </div>
      <div className="playlistCover__flexible">
        <div className="content">
          <p className={headingStyles}>{title}</p>
          <p className="txt-sm txt-sec">{featuredArtists}</p>
        </div>
        <InfoBadge text={text} />
      </div>
    </div>
  );
};

export default PlaylistCover;
