import { ChangeEvent } from "react";

export interface ProgressProps {
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}
