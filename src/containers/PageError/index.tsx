import ProgressiveImage from "react-progressive-graceful-image";

import Spinner from "components/Spinner";
import Image from "assets/images/error302ART.png";
import ImageSM from "assets/images/error302ART_sm.png";

import { IMAGE_ALT, HEADING, PARAGRAPH } from "./constants";
import { pageErrorProps } from "./types";
import "./styles.scss";

const PageError = ({ isLoading, isError, children }: pageErrorProps) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className="homeError__wrapper">
          <ProgressiveImage placeholder={ImageSM} src={Image}>
            {(src) => <img src={src} alt={IMAGE_ALT} />}
          </ProgressiveImage>
          <div className="mt-2">
            <h1 className="txt-h6 txt-sec mb-1">{HEADING}</h1>
            <p className="txt-btn txt-muted">{PARAGRAPH}</p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default PageError;
