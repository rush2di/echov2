import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChangeEvent, InputHTMLAttributes } from "react";

export type StateTypes = "error" | "success" | "default";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  feedback?: string;
  state?: StateTypes;
  icon?: IconProp;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}
