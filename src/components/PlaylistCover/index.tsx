import InfoBadge from "components/InfoBadge";

import { parseFeaturedArtists } from "./utils";
import { PlaylistCoverProps } from "./types";
import "./styles.scss";

const PlaylistCover = ({
  type,
  text,
  title,
  artists,
  img,
}: PlaylistCoverProps) => {
  const featuredArtists = parseFeaturedArtists({
    pattern: "Featuring #...",
    modifier: "#",
    artists,
  });

  return (
    <div className={`playlistCover --${type}`}>
      <div className="playlistCover__background">
        <img src={img} alt={title} />
        <div className="overlay" />
      </div>
      <div className="playlistCover__flexible">
        <div className="content">
          <p className="txt-h6 txt-prim">{title}</p>
          <p className="txt-sm txt-prim">{featuredArtists}</p>
        </div>
        <InfoBadge text={text} />
      </div>
    </div>
  );
};

export default PlaylistCover;
