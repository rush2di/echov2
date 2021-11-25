import { MutableRefObject } from "react";

const changeProgressCurrentTime = (
  progressRef: MutableRefObject<HTMLDivElement>,
  liveProgress?: number
) => {
  if (!progressRef.current) return;
  progressRef.current.style.width = `${liveProgress}%`;
};

export { changeProgressCurrentTime };
