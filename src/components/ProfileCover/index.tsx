import ProgressiveImage from "react-progressive-graceful-image";

import { ProfileCoverProps } from "./types";
import "./styles.scss"

const ProfileCover = ({ cover, image, username }: ProfileCoverProps) => {
  return (
    <div className="ProfileCover">
      <div className="ProfileCover__background">
        <ProgressiveImage
          src={cover.md}
          placeholder={cover.xsm}
          srcSetData={{
            srcSet: cover.srcSet,
            sizes: cover.sizes,
          }}
        >
          {(src, _, srcSetData) => {
            return (
              <img
                src={src}
                srcSet={srcSetData.srcSet}
                sizes={srcSetData.sizes}
                alt={cover.alt}
              />
            );
          }}
        </ProgressiveImage>
      </div>
      <div className="ProfileCover__dp">
        <img src={image} alt={username} />
        <p className="txt-btn txt-sec">{username}</p>
      </div>
    </div>
  );
};

export default ProfileCover;
