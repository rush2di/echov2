import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  volumeDefaults,
  volumeIcon,
  volumeIconMuted,
  VOLUME_DEFAULT_VALUE,
  VOLUME_INPUT_TYPE,
} from "./constatns";
import { VolumeProps } from "./types";

const Volume = forwardRef(
  (
    { isMuted = volumeDefaults.isMuted, onChange, onClick }: VolumeProps,
    ref: any
  ) => {
    const iconState = isMuted ? volumeIconMuted : volumeIcon;

    return (
      <div className="volume">
        <div className="pointer" onClick={onClick}>
          <FontAwesomeIcon icon={iconState} />
        </div>
        <div className="volume__track ml-1">
          <input
            onChange={onChange}
            type={VOLUME_INPUT_TYPE}
            defaultValue={VOLUME_DEFAULT_VALUE}
          />
          <div className="volume__value" ref={(elem) => (ref.current = elem)} />
        </div>
      </div>
    );
  }
);

export default Volume;
