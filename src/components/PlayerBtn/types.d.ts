import { IconName } from "@fortawesome/fontawesome-common-types";

export interface PlayerButtonProps {
  type: "lg" | "md" | "sm";
  icon: IconName;
  isHeart?: boolean;
  isLiked?: boolean;
  onClick?(): void;
}
