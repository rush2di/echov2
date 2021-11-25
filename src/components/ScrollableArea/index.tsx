import { ScrollableAreaProps } from "./types";
import "./styles.scss";

const ScrollableArea = ({ children }: ScrollableAreaProps) => {
  return <div className="scrollable">{children}</div>;
};

export default ScrollableArea;
