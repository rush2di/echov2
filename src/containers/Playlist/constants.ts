import { IconProp } from "@fortawesome/fontawesome-svg-core";

const UTILS_PARAMS_UNIQUE_PROP = "artist_name";
const UTILS_PARAMS_SLICE_LIMIT = 30;
const UTILS_PARAMS_SEPARETOR = ", ";

const ARGS_TEMPLATE = "from # artists";
const ARGS_REPLACER = "#";

const INFO_ICON: IconProp = ["fas", "info-circle"];
const INFO_TEXT = "Click the download icon to download the full song";

export {
  UTILS_PARAMS_UNIQUE_PROP,
  UTILS_PARAMS_SLICE_LIMIT,
  UTILS_PARAMS_SEPARETOR,
  ARGS_TEMPLATE,
  ARGS_REPLACER,
  INFO_TEXT,
  INFO_ICON,
};
