import { ReactNode } from "react";

import "./styles.scss";

interface ScrollableAreaProps {
  children: ReactNode;
}

const ScrollableArea = ({ children }: ScrollableAreaProps) => {
  return <div className="scrollable">{children}</div>;
};

export default ScrollableArea;
