import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { authLogoutStart } from "containers/App/actions";
import AudioPlayerContainer from "containers/AudioPlayer";
import ScrollableArea from "components/ScrollableArea";
import SideNavContainer from "components/SideNav";
import TopNav from "components/TopNav";

import { selectAuthcurrentUser, selectAuthUserState } from "./selectors";
import { scrollParams } from "./constatns";
import { LayoutProps } from "./types";
import "./styles.scss";

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const isUserConnected = useSelector(selectAuthUserState);
  const userInfo = useSelector(selectAuthcurrentUser);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation<Location>();
  const history = useHistory<History>();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => isOpen && setIsOpen(false);

  const handleLogout = () => dispatch(authLogoutStart());

  useLayoutEffect(() => {
    const childElem = wrapperRef.current.children[0];
    if (!!childElem) childElem.scrollTo(scrollParams);
  }, [location.pathname]);

  useEffect(() => {
    if (isUserConnected !== null) {
      history.push("/");
    }
  }, [isUserConnected]);

  return (
    <>
      <SideNavContainer
        isOpen={isOpen}
        onClick={handleMenuToggle}
        onItemClick={handleMenuItemClick}
        isUserConnected={isUserConnected}
      />
      <div ref={wrapperRef} className="appWrapper">
        <ScrollableArea>
          <TopNav
            isUserConnected={isUserConnected}
            userInfo={userInfo}
            handleLogout={handleLogout}
          />
          <div className="container__fluid">{children}</div>
        </ScrollableArea>
      </div>
      <AudioPlayerContainer />
    </>
  );
};

export default Layout;
