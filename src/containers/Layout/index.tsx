import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import AudioPlayerContainer from "containers/AudioPlayer";
import ScrollableArea from "components/ScrollableArea";
import SideNavContainer from "components/SideNav";
import TopNav from "components/TopNav";

import { scrollParams } from "./constatns";
import { LayoutProps } from "./types";
import "./styles.scss";

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const location = useLocation<Location>();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    const childElem = wrapperRef.current.children[0];

    if (!!childElem) childElem.scrollTo(scrollParams);
  }, [location.pathname]);

  return (
    <>
      <SideNavContainer isOpen={isOpen} onClick={handleMenuToggle} />
      <div ref={wrapperRef} className="appWrapper">
        <ScrollableArea>
          <TopNav />
          <div className="container__fluid">{children}</div>
        </ScrollableArea>
      </div>
      <AudioPlayerContainer />
    </>
  );
};

export default Layout;
