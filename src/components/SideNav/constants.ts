import { MenuItemProps } from "components/MenuItem/types";

const sideNavText = {
  account: "Account",
  logo: "Echoboard",
  menu: "Menu",
};

const menuItemsMenu: Array<MenuItemProps> = [
  { icon: "home", text: "Discover", color: "color-1", link: "/" },
  { icon: "star", text: "Trending", color: "color-2" },
  { icon: "headphones", text: "Streaming", color: "color-3" },
  { icon: "bookmark", text: "Bookmark", color: "color-4" },
];

const menuItemsAccount: Array<MenuItemProps> = [
  { icon: "save", text: "Downloads", color: "color-5" },
  { icon: "heart", text: "Favorites", color: "color-6" },
  { icon: "ticket-alt", text: "Copouns", color: "color-7" },
];

export { sideNavText, menuItemsMenu, menuItemsAccount };