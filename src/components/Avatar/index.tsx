import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

export interface AvatarProps {
  includeLabels: boolean;
  size: "lg" | "sm";
  image: string;
  title: string;
  songNames?: string;
}

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
            <FontAwesomeIcon icon={["fas", "check"]} />
          </div>
        )}
      </div>
      <div className="avatar__body ml-1">
        <div className="content">
          <h4 className="txt-btn txt-sec mr-1">{title}</h4>
          {!includeLabels && (
            <button className="btn-naked txt-btn">
              <FontAwesomeIcon icon={["fas", "chevron-down"]} />
            </button>
          )}
        </div>
        {includeLabels && <p className="txt-sm txt-muted">{songNames}</p>}
      </div>
    </div>
  );
};

export default Avatar;
