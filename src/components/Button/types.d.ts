import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SyntheticEvent } from "react";

export interface ButtonProps {
  label?: string;
  icon?: IconProp;
  classNames?: string;
  onClick?(e: SyntheticEvent): void;
  [x: string]: any;  // All other props
}
