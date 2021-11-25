import Button from "components/Button";

import {
  DISCLAIMER_BTN_TEXT,
  DISCLAIMER_TITLE,
  DISCLAIMER_GIF,
  DISCLAIMER_TEXT_FIRST,
  DISCLAIMER_TEXT_SEC,
} from "./constants";
import { DisclaimerProps } from "./types";
import "./styles.scss";

const Disclaimer = ({ onClick }: DisclaimerProps) => {
  return (
    <div className="disclaimer">
      <div className="disclaimer__head">
        <img src={DISCLAIMER_GIF} alt={DISCLAIMER_TITLE} />
      </div>
      <div className="disclaimer__body mt-1">
        <h1 className="txt-h6 txt-sec">{DISCLAIMER_TITLE}</h1>
        <p className="txt mt-1">{DISCLAIMER_TEXT_FIRST}</p>
        <p className="txt mt-1">{DISCLAIMER_TEXT_SEC}</p>
      </div>
      <div className="disclaimer__footer mt-1">
        <Button
          onClick={onClick}
          label={DISCLAIMER_BTN_TEXT}
          classNames={"btn--flex btn--fluid txt-btn"}
          icon={"check-circle"}
        />
      </div>
    </div>
  );
};

export default Disclaimer;
