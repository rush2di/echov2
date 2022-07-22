// @ts-ignore: Unreachable code error
import ContentLoader from "react-content-loader";
import { useMedia } from "react-use";

import { _MOBILE_BREAKPOINT } from "helpers/constants";

const Skeleton = () => {
  const isMobile = useMedia(`(max-width: ${_MOBILE_BREAKPOINT})`);

  return isMobile ? (
    <ContentLoader
      speed={2}
      viewBox="0 0 390 844"
      backgroundColor="#706f85"
      foregroundColor="#353340"
    >
      <path d="M 47 170 h 87 v 17 H 47 z M 30 66 h 331 v 15 H 30 z M 109 252 h 67 v 15 h -67 z M 109 328 h 67 v 15 h -67 z M 109 404 h 67 v 14 h -67 z M 109 479 h 67 v 15 h -67 z M 36 600 h 102 v 15 H 36 z M 36 671 h 102 v 15 H 36 z M 36 743 h 102 v 14 H 36 z M 36 814 h 102 v 14 H 36 z M 176 600 h 80 v 15 h -80 z M 176 671 h 80 v 15 h -80 z M 176 743 h 80 v 14 h -80 z M 176 814 h 80 v 14 h -80 z M 308 600 h 45 v 15 h -45 z M 308 671 h 45 v 15 h -45 z M 308 743 h 45 v 14 h -45 z M 308 814 h 45 v 14 h -45 z M 109 278 h 211 v 15 H 109 z M 109 354 h 211 v 15 H 109 z M 109 430 h 211 v 14 H 109 z M 109 505 h 211 v 15 H 109 z M 30 93 h 90 v 15 H 30 z M 30 15 h 277 v 21 H 30 z M 240 170 h 103 v 17 H 240 z M 205 170 h 26 v 17 h -26 z" />
      <circle cx="69" cy="271" r="23" />
      <circle cx="69" cy="422" r="23" />
      <circle cx="69" cy="498" r="23" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      viewBox="0 0 1440 782"
      backgroundColor="#706f85"
      foregroundColor="#353340"
    >
      <path d="M 42 51 h 348 v 31 H 42 z M 42 112 h 435 v 15 H 42 z M 250 204 h 172 v 15 H 250 z M 250 276 h 172 v 15 H 250 z M 250 348 h 172 v 15 H 250 z M 250 420 h 172 v 15 H 250 z M 250 492 h 172 v 15 H 250 z M 250 564 h 172 v 15 H 250 z M 250 636 h 172 v 15 H 250 z M 250 708 h 172 v 15 H 250 z M 178 204 h 38 v 15 h -38 z M 178 276 h 38 v 15 h -38 z M 178 348 h 38 v 15 h -38 z M 178 420 h 38 v 15 h -38 z M 178 492 h 38 v 15 h -38 z M 178 564 h 38 v 15 h -38 z M 178 636 h 38 v 15 h -38 z M 178 708 h 38 v 15 h -38 z M 770 204 h 38 v 15 h -38 z M 770 276 h 38 v 15 h -38 z M 770 348 h 38 v 15 h -38 z M 770 420 h 38 v 15 h -38 z M 770 492 h 38 v 15 h -38 z M 770 564 h 38 v 15 h -38 z M 770 636 h 38 v 15 h -38 z M 770 708 h 38 v 15 h -38 z M 833 204 h 38 v 15 h -38 z M 833 276 h 38 v 15 h -38 z M 833 348 h 38 v 15 h -38 z M 833 420 h 38 v 15 h -38 z M 833 492 h 38 v 15 h -38 z M 833 564 h 38 v 15 h -38 z M 833 636 h 38 v 15 h -38 z M 833 708 h 38 v 15 h -38 z M 461 204 h 172 v 15 H 461 z M 461 276 h 172 v 15 H 461 z M 461 348 h 172 v 15 H 461 z M 461 420 h 172 v 15 H 461 z M 461 492 h 172 v 15 H 461 z M 461 564 h 172 v 15 H 461 z M 461 636 h 172 v 15 H 461 z M 461 708 h 172 v 15 H 461 z M 42 204 h 41 v 15 H 42 z M 42 276 h 41 v 15 H 42 z M 42 348 h 41 v 15 H 42 z M 42 420 h 41 v 15 H 42 z M 42 492 h 41 v 15 H 42 z M 42 564 h 41 v 15 H 42 z M 42 636 h 41 v 15 H 42 z M 42 708 h 41 v 15 H 42 z" />
      <circle cx="130" cy="213" r="22" />
      <circle cx="130" cy="285" r="22" />
      <circle cx="130" cy="357" r="22" />
      <circle cx="130" cy="429" r="22" />
      <circle cx="130" cy="501" r="22" />
      <circle cx="130" cy="573" r="22" />
      <circle cx="130" cy="645" r="22" />
      <circle cx="130" cy="717" r="22" />
      <circle cx="981" cy="325" r="27" />
      <circle cx="981" cy="409" r="27" />
      <circle cx="981" cy="493" r="27" />
      <circle cx="981" cy="577" r="27" />
      <path d="M 958 208 h 100 v 15 H 958 z M 1218 208 h 100 v 15 h -100 z M 1029 306 h 100 v 15 h -100 z M 1029 390 h 100 v 15 h -100 z M 1029 474 h 100 v 15 h -100 z M 1029 558 h 100 v 15 h -100 z M 1029 333 h 244 v 12 h -244 z M 1029 417 h 244 v 12 h -244 z M 1029 501 h 244 v 12 h -244 z M 1029 585 h 244 v 12 h -244 z M 1172 208 h 26 v 15 h -26 z" />
    </ContentLoader>
  );
};

export default Skeleton;
