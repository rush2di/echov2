import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import InputField from "components/InputField";

import {
  authLoginDefaults,
  authRegisterDefaults,
  inputFieldSearchBar,
} from "./constants";
import { TopNavItemProps, TopNavProps } from "./types";
import "./styles.scss";
import Avatar from "components/Avatar";
import DropdownMenu from "components/DropownMenu";

const TopNav = ({ handleLogout, isUserConnected, userInfo }: TopNavProps) => (
  <div className="container__fluid py-1 topNav">
    <div className="row">
      <div className="col-4 col-xsm-12">
        <InputField {...inputFieldSearchBar} />
      </div>
      <div className="topNav__auth ml-auto mt-1">
        {isUserConnected && [
          <Avatar
            size="sm"
            title={userInfo.fullname}
            image={userInfo.avatar}
          />,
          <div className="hover-area">
            <DropdownMenu>
              <div>Downloads</div>
              <div>Favorites</div>
              <div>Copouns</div>
              <div onClick={handleLogout}>Logout</div>
            </DropdownMenu>
          </div>,
        ]}
      </div>
    </div>
  </div>
);

const TopNavItem = ({ icon, link, label }: TopNavItemProps) => (
  <div className="topNav__auth-item ml-2">
    <Link to={link} className="txt-btn">
      <FontAwesomeIcon icon={["fas", icon]} />
      <p className="txt-btn">{label}</p>
    </Link>
  </div>
);

export default TopNav;
