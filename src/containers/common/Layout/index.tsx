import { ReactNode } from "react";
import AudioPlayerContainer from "containers/common/AudioPlayer";
import SideNavContainer from "containers/common/SideNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideNavContainer />
      {children}
      <AudioPlayerContainer />
    </>
  );
};

export default Layout;
