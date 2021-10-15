import { v4 as uuid } from "uuid";

import ScrollableArea from "components/ScrollableArea";
import ToggleButton from "./ToggleBtn";
import MenuItem from "./MenuItem";

import { menuItemsAccount, menuItemsMenu, sideNavText } from "./constants";
import "./styles.scss";

const SideNav = () => {
  return (
    <div className="sideNav">
      <ScrollableArea>
        <div className="px-2 px-md-1 py-2">
          <div className="sideNav__head">
            <ToggleButton />
            <h1 className="txt-h5 txt-prim">{sideNavText.logo}</h1>
          </div>
          <div className="sideNav__body mt-3 mt-md-2">
            <h2 className="txt-sm-caps">{sideNavText.menu}</h2>
            {menuItemsMenu.map((item) => {
              return <MenuItem key={uuid()} {...item} />;
            })}
          </div>
          <hr className="mx-0" />
          <div className="sideNav__body mt-3 mt-md-2">
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
