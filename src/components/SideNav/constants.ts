import { MenuItemProps } from "components/MenuItem/types";

const CLASSNAMES_OPENED = "--open";
const CLASSNAMES_CLOSED = "--close";

const sideNavText = {
  account: "Account",
  logo: "Echoboard",
  menu: "Menu",
};

const menuItemsMenu: Array<MenuItemProps> = [
  { icon: "home", text: "Discover", color: "color-1", link: "/" },
  { icon: "star", text: "Trending", color: "color-2" },
  {
    icon: "headphones",
    text: "Streaming",
    color: "color-3",
    link: "/playlist/",
  },
  { icon: "bookmark", text: "Bookmark", color: "color-4" },
];

const menuItemsAccount: Array<MenuItemProps> = [
  { icon: "save", text: "Downloads", color: "color-5", link: "/downloads" },
  { icon: "heart", text: "Favorites", color: "color-6", link: "/likes"  },
  { icon: "ticket-alt", text: "Copouns", color: "color-7" },
];

const menuItemsAuth: Array<MenuItemProps> = [
  { icon: "sign-in-alt", text: "Login", color: "color-5", link: "/login" },
  { icon: "user-plus", text: "Register", color: "color-6", link: "/register" },
];

export {
  sideNavText,
  menuItemsMenu,
  menuItemsAccount,
  menuItemsAuth,
  CLASSNAMES_OPENED,
  CLASSNAMES_CLOSED,
};
