import PlaylistCover from "components/PlaylistCover";
import { CARD_UI, STACKED_UI } from "components/PlaylistCover/constants";
import { FIRST_HEADING, SECOND_HEADING } from "./constants";
import { HomePageProps } from "./types";

const HomePage = ({ appData }: HomePageProps) => {
  return (
    <div className="py-1">
      <h1 className="txt-h4 txt-prim mb-2">{FIRST_HEADING}</h1>
      <div className="row">
        <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
          <PlaylistCover
            type={STACKED_UI}
            img={appData[0].bg}
            title={appData[0].title}
            artists={["test", "test"]}
          />
        </div>
        <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
          <PlaylistCover
            type={STACKED_UI}
            img={appData[1].bg}
            title={appData[1].title}
            artists={["test", "test"]}
          />
        </div>
      </div>
      <h2 className="txt-h5 txt-prim mt-3 mb-2">{SECOND_HEADING}</h2>
      <div className="row">
        {appData.slice(2).map((data) => (
          <div className="col-3 col-lg-4 col-md-4 col-sm-6 col-xsm-12">
            <PlaylistCover
              key={data.id}
              type={CARD_UI}
              img={data.bg}
              title={data.title}
              artists={["test", "test"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
