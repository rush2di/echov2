import ImageXSM from "assets/images/auth_xsm.jpg";
import ImageSM from "assets/images/auth_sm.jpg";
import ImageMD from "assets/images/auth_md.jpg";
import ImageXL from "assets/images/auth_xl.jpg";

const authImage = {
  xsm: ImageXSM,
  sm: ImageSM,
  md: ImageMD,
  xl: ImageXL,
  alt: "Welcome to echoboard",
  sizes: "(max-width: 2000px) 100vw, 2000px",
  srcSet: "",
};

const _MOBILE_BREAKPOINT = "767px";

authImage.srcSet = `
      ${authImage.sm} 320w,
      ${authImage.md} 700w, 
      ${authImage.xl} 2000w`;

export { authImage, _MOBILE_BREAKPOINT };
