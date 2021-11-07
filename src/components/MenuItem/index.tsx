import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { MenuItemProps } from "./types";

const MenuItem = ({ icon, text, color, link, onClick }: MenuItemProps) => {
  const componentProps = { icon, text, color };

  if (!link) {
    return <Item onClick={onClick} {...componentProps} />;
  } else {
    return link === "/" ? (
      <NavLink exact to={link} activeClassName="menuItem--active">
        <Item onClick={onClick} {...componentProps} />
      </NavLink>
    ) : (
      <NavLink to={link} activeClassName="menuItem--active">
        <Item onClick={onClick} {...componentProps} />
      </NavLink>
    );
  }
};

const Item = ({ icon, text, color, onClick }: MenuItemProps) => (
  <div onClick={onClick} className="menuItem">
    <div className={`menuItem__icon mr-1 mr-md-0 --${color}`}>
      <FontAwesomeIcon icon={["fas", icon]} />
    </div>
    <p className="txt-btn">{text}</p>
  </div>
);

export default MenuItem;
