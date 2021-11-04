import { sideMenuActions } from "./constatns";

const userToggleMenu = () => {
  return {
    type: sideMenuActions.USER_TOGGLE_MENU,
  };
};

export { userToggleMenu };
