import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { checkIcon, dropdownIcon } from "./constants";
import { AvatarProps } from "./types";
import "./styles.scss";

const Avatar = ({
  includeLabels,
  image,
  title,
  size,
  songNames,
}: AvatarProps) => {
  return (
    <div className={`avatar --${size}`}>
      <div className="avatar__head">
        <img src={image} alt={title} />
        {includeLabels && (
          <div>
            <FontAwesomeIcon icon={checkIcon} />
          </div>
        )}
      </div>
      <div className="avatar__body ml-1">
        <div className="content">
          <h4 className="txt-btn txt-sec mr-1">{title}</h4>
          {!includeLabels && (
            <button className="btn-naked txt-btn">
              <FontAwesomeIcon icon={dropdownIcon} />
            </button>
          )}
        </div>
        {includeLabels && <p className="txt-sm txt-muted">{songNames}</p>}
      </div>
    </div>
  );
};

export default Avatar;
