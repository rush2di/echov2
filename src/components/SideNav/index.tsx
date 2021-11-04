import { v4 as uuid } from "uuid";

import ScrollableArea from "components/ScrollableArea";
import ToggleButton from "components/ToggleBtn";
import MenuItem from "components/MenuItem";

import {
  CLASSNAMES_CLOSED,
  CLASSNAMES_OPENED,
  menuItemsAccount,
  menuItemsMenu,
  sideNavText,
} from "./constants";
import "./styles.scss";

const SideNav = ({ onClick, isOpen }) => {
  const classNames = isOpen ? CLASSNAMES_OPENED : CLASSNAMES_CLOSED;

  return (
    <div className={`sideNav ${classNames}`}>
      <ScrollableArea>
        <div className="px-2 px-md-1 py-2">
          <div className="sideNav__head">
            <ToggleButton onClick={onClick} />
            <h1 className="txt-h5 txt-prim">{sideNavText.logo}</h1>
          </div>
          <div className="sideNav__body mt-3 mt-md-2">
            <h2 className="txt-sm-caps">{sideNavText.menu}</h2>
            {menuItemsMenu.map((item) => {
              return <MenuItem key={uuid()} {...item} />;
            })}
          </div>
          <hr className="mx-0 my-2" />
          <div className="sideNav__body">
            <h2 className="txt-sm-caps">{sideNavText.account}</h2>
            {menuItemsAccount.map((item) => {
              return <MenuItem key={uuid()} {...item} />;
            })}
          </div>
        </div>
      </ScrollableArea>
    </div>
  );
};

export default SideNav;
