import { IconName } from "@fortawesome/fontawesome-common-types";

export interface TopNavProps {
  handleLogout?(e: MouseEvent<HTMLDivElement>): void;
  isUserConnected: boolean;
  userInfo?: any;
}

export interface TopNavItemProps {
  label: string;
  link: string;
  icon: IconName;
}
