import ProgressiveImage from "react-progressive-graceful-image";

import InfoBadge from "components/InfoBadge";
import { generateTitle } from "helpers/utils";

import { BADGE_TEXT, STACKED_UI, IMAGE_SIZES } from "./constants";
import { parseFeaturedArtists } from "./utils";
import { PlaylistCoverProps } from "./types";
import "./styles.scss";

const PlaylistCover = ({
  id,
  type,
  title,
  artists,
  onClick,
  src,
  srcSet,
  placeholder,
  sizes = IMAGE_SIZES,
  text = BADGE_TEXT,
}: PlaylistCoverProps) => {
  const headingStyles: string =
    type === STACKED_UI ? "txt-h6 txt-prim" : "txt txt-sec";

  const featuredArtists: string = parseFeaturedArtists({
    pattern: "Featuring #...",
    modifier: "#",
    artists,
  });

  return (
    <div onClick={() => onClick(id)}>
      <div className={`playlistCover --${type}`}>
        <div className="playlistCover__background">
          <ProgressiveImage
            src={src}
            placeholder={placeholder}
            srcSetData={{
              srcSet: srcSet,
              sizes: sizes,
            }}
          >
            {(src, _, srcSetData) => {
              return (
                <img
                  src={src}
                  srcSet={srcSetData.srcSet}
                  sizes={srcSetData.sizes}
                  alt={title}
                />
              );
            }}
          </ProgressiveImage>
          <div className="overlay" />
        </div>
        <div className="playlistCover__flexible">
          <div className="content">
            <p className={headingStyles}>{generateTitle(title)}</p>
            <p className="txt-sm txt-sec">{featuredArtists}</p>
          </div>
          <InfoBadge text={text} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCover;
