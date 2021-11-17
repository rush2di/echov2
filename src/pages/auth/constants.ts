import ImageXSM from "assets/images/auth_xsm.jpg";
import ImageSM from "assets/images/auth_sm.jpg";
import ImageMD from "assets/images/auth_md.jpg";
import ImageXL from "assets/images/auth_xl.jpg";

const REGISTER_AUTH_TYPE = "register";
const LOGIN_AUTH_TYPE = "login";

const FALLBACK_MSG = "The sadness... You've reached an unreachable route";

const authImage = {
  xsm: ImageXSM,
  sm: ImageSM,
  md: ImageMD,
  xl: ImageXL,
  alt: "Welcome to echoboard",
  sizes: "(max-width: 2000px) 100vw, 2000px",
  srcSet: "",
};

authImage.srcSet = `
    ${authImage.sm} 320w,
    ${authImage.md} 700w, 
    ${authImage.xl} 2000w`;

export { REGISTER_AUTH_TYPE, LOGIN_AUTH_TYPE, FALLBACK_MSG, authImage };
