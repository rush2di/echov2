import ScrollableArea from "components/ScrollableArea";
import AudioPlayerContainer from "containers/AudioPlayer";
import SideNavContainer from "containers/SideNav";
import TopNav from "containers/TopNav";
import { LayoutProps } from "./types";
import "./styles.scss";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideNavContainer />
      <div className="appWrapper">
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
