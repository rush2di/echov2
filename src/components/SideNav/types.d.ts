import { SyntheticEvent } from "react";

export interface SideNavProps {
  isOpen: boolean;
  isUserConnected: boolean;
  onClick?(e: SyntheticEvent<MouseEvent>): void;
  onItemClick?(e: SyntheticEvent<MouseEvent>): void;
}
