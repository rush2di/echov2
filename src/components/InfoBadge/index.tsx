import { InfoBadgeDefaults } from "./constants";
import { InfoBadgeProps } from "./types";
import "./styles.scss";


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
