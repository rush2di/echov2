import { SyntheticEvent } from "react";

export interface SideNavProps {
  isOpen: boolean;
  onClick?(e: SyntheticEvent<MouseEvent>): void;
}
