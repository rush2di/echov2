import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VolumeProps } from "./types";

const volumeDefaults: VolumeProps = {
  isMuted: false,
};

const volumeIcon: IconProp = ["fas", "volume-up"];

const volumeIconMuted: IconProp = ["fas", "volume-off"];

const VOLUME_INPUT_TYPE: string = "range";

const VOLUME_DEFAULT_VALUE: string = "100";

export {
  volumeDefaults,
  volumeIcon,
  volumeIconMuted,
  VOLUME_INPUT_TYPE,
  VOLUME_DEFAULT_VALUE,
};
