import InfoBadge from "components/InfoBadge";
import { parseFeaturedArtists } from "helpers/utils";
import "./styles.scss";

export interface PlaylistCoverProps {
  type: "stacked" | "card";
  title: string;
  text?: string;
  artists: string[];
  img: string;
}

const PlaylistCover = ({
  type,
  text,
  title,
  artists,
  img,
}: PlaylistCoverProps) => {
  const featuredArtists = parseFeaturedArtists(artists);

  return (
    <div className={`playlistCover --${type}`}>
      <div className="playlistCover__background">
        <img src={img} alt={title} />
        <div className="overlay" />
      </div>
      <div className="playlistCover__flexible">
        <div className="content">
          <p className="txt-h6 txt-prim">{title}</p>
          <p className="txt-sm txt-prim">Featuring {featuredArtists}...</p>
        </div>
        <InfoBadge text={text} />
      </div>
    </div>
  );
};

export default PlaylistCover;
