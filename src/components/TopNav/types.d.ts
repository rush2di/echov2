import { IconName } from "@fortawesome/fontawesome-common-types";

export interface TopNavProps {
  userLoggedin?: boolean;
}

export interface TopNavItemProps {
  label: string;
  link: string;
  icon: IconName;
}
