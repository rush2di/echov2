import { IconName } from "@fortawesome/fontawesome-common-types";

export interface TopNavProps {
  isUserConnected: boolean;
  userInfo?: any;
}

export interface TopNavItemProps {
  label: string;
  link: string;
  icon: IconName;
}
