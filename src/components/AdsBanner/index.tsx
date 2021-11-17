import { AdsBannerProps } from "./types";
import "./styles.scss";

const AdsBanner = ({ imageSrc, imageAlt, linkTo }: AdsBannerProps) => {
  return (
    <div className="adsBanner">
      {!!linkTo ? (
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={imageAlt} />
        </a>
      ) : (
        <img src={imageSrc} alt={imageAlt} />
      )}
    </div>
  );
};

export default AdsBanner;
