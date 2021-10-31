import ScrollableArea from "components/ScrollableArea";
import SideNavContainer from "components/SideNav";
import TopNav from "components/TopNav";
import AudioPlayerContainer from "containers/AudioPlayer";
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
