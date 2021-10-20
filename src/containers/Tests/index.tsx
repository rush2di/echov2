import ArtistsTable from "components/ArtistsTable";
import Avatar from "components/Avatar";
import DropdownMenu from "components/DropownMenu";
import InputField from "components/InputField";
import { inputFieldPassword } from "components/InputField/constants";
import PlaylistCover from "components/PlaylistCover";
import PlaylistItem from "components/PlaylistItem";
import ScrollableArea from "components/ScrollableArea";
import { artistsNumberToText, rankLeftFill } from "helpers/utils";
import { avatarTest, playlistTest, testProps } from "./constants";

const Test = () => {
  const styles = { border: "1px solid red", height: "100%" };

  return (
    <ScrollableArea>
      <div style={styles} className="container__fluid pt-2">
        <DropdownMenu>
          <div>hello world</div>
          <div>hello world</div>
          <div>hello world</div>
          <div>hello world</div>
        </DropdownMenu>
        {/* <SearchBarTesting /> */}
        {/* <ArtistTableTesting /> */}
        {/* <Avatar {...avatarTest} /> */}
        {/* <PlaylistTesting /> */}
        {/* <CoversTesting />  */}
      </div>
    </ScrollableArea>
  );
};

const SearchBarTesting = () => {
  return <InputField {...inputFieldPassword} />;
};

const ArtistTableTesting = () => (
  <div className="row">
    <div className="col-3">
      <ArtistsTable label={artistsNumberToText("from # artists", "#", 12)}>
        {[...new Array(4)].map((_, index) => {
          return <Avatar key={"test-" + index} {...avatarTest} />;
        })}
      </ArtistsTable>
    </div>
  </div>
);

const PlaylistTesting = () => (
  <div className="py-4">
    <div className="row w-100">
      <div className="col-8 col-sm-12 col-xsm-12">
        {playlistTest.map((props, i) => {
          return (
            <div key={"p" + i}>
              <PlaylistItem {...{ ...props, rank: rankLeftFill(i + 1) }} />
              <hr className="my-0 w-100 bg-muted" />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const CoversTesting = () => (
  <div className="row">
    <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
      <PlaylistCover {...{ ...testProps[0], type: "stacked" }} />
    </div>
    <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
      <PlaylistCover {...{ ...testProps[0], type: "stacked" }} />
    </div>
    {testProps.map((card, i) => {
      return (
        <div className="col-3 col-lg-4 col-md-4 col-sm-6 col-xsm-12">
          <PlaylistCover key={i} {...card} />
        </div>
      );
    })}
  </div>
);

export default Test;
