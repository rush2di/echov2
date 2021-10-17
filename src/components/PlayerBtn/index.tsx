import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { resolveReactionIcon } from "helpers/utils";

export interface PlayerButtonProps {
  type: "lg" | "md" | "sm";
  icon: IconName;
  isHeart?: boolean;
  isLiked?: boolean;
  onClick?(): void;
}

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
