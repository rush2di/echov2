import { IconName } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export interface MenuItemProps {
  icon: IconName;
  text: string;
  color: string;
  link?: string;
}

const MenuItem = ({ icon, text, color, link }: MenuItemProps) => {
  return !!link ? (
    <NavLink exact to={link} activeClassName="menuItem--active">
      <Item {...{ icon, text, color }} />
    </NavLink>
  ) : (
    <Item {...{ icon, text, color }} />
  );
};

const Item = ({ icon, text, color }: MenuItemProps) => (
  <div className="menuItem">
    <div className={`menuItem__icon mr-1 mr-md-0 --${color}`}>
      <FontAwesomeIcon icon={["fas", icon]} />
    </div>
    <p className="txt-btn">{text}</p>
  </div>
);

export default MenuItem;
