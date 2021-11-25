import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveReactionIcon } from "helpers/utils";
import { PlayerButtonProps } from "./types";

const PlayerButton = ({
  type,
  icon,
  isHeart,
  isLiked,
  trackID,
  onClick,
  animated = false,
}: PlayerButtonProps) => {
  const iconPrefix = resolveReactionIcon(isHeart, isLiked);
  const buttonAttributesBase = { className: `playerButton--${type}` };

  if (typeof onClick == "function") {
    buttonAttributesBase["onClick"] = (event) => onClick(event, trackID || "");
  }

  return (
    <button {...buttonAttributesBase}>
      <FontAwesomeIcon icon={[iconPrefix, icon]} spin={animated} />
    </button>
  );
};

export default PlayerButton;
