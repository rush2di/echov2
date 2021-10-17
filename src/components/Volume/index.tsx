import { forwardRef, SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VolumeProps {
  onChange?: (e: SyntheticEvent) => void;
}

const Volume = forwardRef(({ onChange }: VolumeProps, ref: any) => {
  return (
    <div className="volume">
      <FontAwesomeIcon icon={["fas", "volume-up"]} />
      <div  className="volume__track ml-1">
        <input onChange={onChange} type="range" defaultValue="100" />
        <div className="volume__value" ref={(elem) => (ref.current = elem)} />
      </div>
    </div>
  );
});

export default Volume;
