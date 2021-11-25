import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";

const itemDecorator: IconProp = ["fas", "caret-right"];

const itemIconDownload: IconProp = ["fas", "download"];

const itemIconPending: IconProp = ["fas", "circle-notch"];

const ICON_HEART: IconName = "heart";

const ACTIVE_CLASSNAME = "--is-playing";

const DEFAULT_CLASSNAME = "--is-default";

export {
  ICON_HEART,
  itemDecorator,
  itemIconDownload,
  itemIconPending,
  ACTIVE_CLASSNAME,
  DEFAULT_CLASSNAME,
};
