import { CSSProperties } from "react";

import { visibilityStyles } from "./constants";
import { PlayerInfoProps } from "./types";

const PlayerInfo = ({ visibility, image, title, artist }: PlayerInfoProps) => {
  const styles = {
    visibility: visibility ? visibilityStyles.visible : visibilityStyles.hidden,
  } as CSSProperties;

  return (
    <div className="playerInfo" style={styles}>
      <img src={image} alt="soundtrack cover" />
      <div className="playerInfo__text ml-1">
        <p className="txt-btn">{title}</p>
        <p className="txt-sm">{artist}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
