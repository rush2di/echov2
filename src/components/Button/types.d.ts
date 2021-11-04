import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SyntheticEvent } from "react";

export interface ButtonProps {
  label?: string;
  icon?: IconProp;
  classNames?: string;
  onClick?(e: SyntheticEvent): void;
  // All other props
  [x: string]: any;
}
