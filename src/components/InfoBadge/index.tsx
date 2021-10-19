import { InfoBadgeDefaults } from "./constants";
import "./styles.scss";

export interface InfoBadgeProps {
  text?: string;
  position?: "top" | "bottom";
}

const InfoBadge = ({
  text = InfoBadgeDefaults.text,
  position = InfoBadgeDefaults.position,
}: InfoBadgeProps) => {
  return (
    <div className={`infoBadge --${position}`}>
      <p className="txt-sm txt-prim">{text}</p>
    </div>
  );
};

export default InfoBadge;
