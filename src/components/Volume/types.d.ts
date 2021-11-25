import { ChangeEvent } from "react";

export interface VolumeProps {
  isMuted?: boolean;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  onClick?(e: MouseEvent<HTMLDivElement>): void;
}
