import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { MenuItemProps } from "./types";

const MenuItem = ({ icon, text, color, link }: MenuItemProps) => {
  const componentProps = { icon, text, color };

  return !link ? (
    <Item {...componentProps} />
  ) : link === "/" ? (
    <NavLink exact to={link} activeClassName="menuItem--active">
      <Item {...componentProps} />
    </NavLink>
  ) : (
    <NavLink to={link} activeClassName="menuItem--active">
      <Item {...componentProps} />
    </NavLink>
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
