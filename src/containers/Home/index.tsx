import PlaylistCover from "components/PlaylistCover";

import { CARD_UI, STACKED_UI } from "components/PlaylistCover/constants";
import { FIRST_HEADING, SECOND_HEADING } from "./constants";
import { extractFeaturedArtists } from "./utils";

const HomeContainer = ({ worldwideCover, moroccoCover, data }) => (
  <div className="py-1">
    <h1 className="txt-h4 txt-prim mb-2">{FIRST_HEADING}</h1>
    <div className="row">
      <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
        <PlaylistCover
          id={worldwideCover.id}
          type={STACKED_UI}
          img={worldwideCover.picture}
          imgPlaceholder={worldwideCover.picture_small}
          title={worldwideCover.title}
          artists={extractFeaturedArtists(worldwideCover.tracks)}
        />
      </div>
      <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
        <PlaylistCover
          id={moroccoCover.id}
          type={STACKED_UI}
          img={moroccoCover.picture}
          imgPlaceholder={moroccoCover.picture_small}
          title={moroccoCover.title}
          artists={extractFeaturedArtists(moroccoCover.tracks)}
        />
      </div>
    </div>
    <h2 className="txt-h5 txt-prim mt-3 mb-2">{SECOND_HEADING}</h2>
    <div className="row">
      {data?.map((data) => (
        <div
          key={data.id}
          className="col-3 col-lg-4 col-md-4 col-sm-6 col-xsm-12"
        >
          <PlaylistCover
            id={data.id}
            type={CARD_UI}
            img={data.picture}
            imgPlaceholder={data.picture_small}
            title={data.title}
            artists={extractFeaturedArtists(data.tracks)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default HomeContainer;
