import { Children, cloneElement, ReactElement } from "react";

import { DropdownMenuProps } from "./types";
import "./styles.scss";

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <div className="dropdownMenu">
      <ul role="navigation" className="dropdownMenu__list">
        {children &&
          Children.map(children, (child) => (
            <li className="dropdownMenu__list-item">
              {cloneElement(child as ReactElement<any>, {
                className: "txt-sm",
              })}
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
