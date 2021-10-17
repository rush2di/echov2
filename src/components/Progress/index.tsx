import { forwardRef, SyntheticEvent } from "react";

interface ProgressProps {
  onClick?: (e: SyntheticEvent) => void;
  onChange?: (e: SyntheticEvent) => void;
}

const Progress = forwardRef(({ onClick, onChange }: ProgressProps, ref: any) => {
  return (
    <div className="progress">
      <input onChange={onChange} type="range" defaultValue="0" />
      <div
        ref={(elem) => (ref.current = elem)}
        className="progress__playedTime"
      />
    </div>
  );
});

export default Progress;
