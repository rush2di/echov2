import { IconName } from "@fortawesome/fontawesome-common-types";

export interface MenuItemProps {
  icon: IconName;
  text: string;
  color: string;
  link?: string;
}
