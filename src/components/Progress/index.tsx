import { forwardRef } from "react";

import { PROGRESS_DEFAULT_VALUE, PROGRESS_TYPE } from "./constants";
import { ProgressProps } from "./types";

const Progress = forwardRef(({ onChange }: ProgressProps, ref: any) => {
  return (
    <div className="progress">
      <input
        defaultValue={PROGRESS_DEFAULT_VALUE}
        type={PROGRESS_TYPE}
        onChange={onChange}
      />
      <div
        ref={(elem) => (ref.current = elem)}
        className="progress__playedTime"
      />
    </div>
  );
});

export default Progress;
