import { MenuItemProps } from "components/MenuItem";

const sideNavText = {
  logo: "Echoboard",
  menu: "Menu",
  account: "Account",
};

const menuItemsMenu: Array<MenuItemProps> = [
  { icon: "home", text: "Discover", color: "color-1", link: "/tests" },
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
