import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveReactionIcon } from "helpers/utils";
import { PlayerButtonProps } from "./types";

const PlayerButton = ({
  type,
  icon,
  isHeart,
  isLiked,
  onClick,
}: PlayerButtonProps) => {
  const iconPrefix = resolveReactionIcon(isHeart, isLiked);
  const buttonAttributesBase = { className: `playerButton--${type}` };

  if (typeof onClick == "function") buttonAttributesBase["onClick"] = onClick;

  return (
    <button {...buttonAttributesBase}>
      <FontAwesomeIcon icon={[iconPrefix, icon]} />
    </button>
  );
};

export default PlayerButton;
