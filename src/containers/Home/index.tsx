import PlaylistCover from "components/PlaylistCover";

import { CARD_UI, STACKED_UI } from "components/PlaylistCover/constants";
import { FIRST_HEADING, SECOND_HEADING } from "./constants";
import { extractFeaturedArtists, extractImageSizes } from "./utils";

const HomeContainer = ({ worldwideCover, moroccoCover, data }) => (
  <div className="py-1">
    <h1 className="txt-h4 txt-prim mb-2">{FIRST_HEADING}</h1>
    <div className="row">
      <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
        <PlaylistCover
          id={worldwideCover.id}
          type={STACKED_UI}
          title={worldwideCover.title}
          src={worldwideCover.picture}
          placeholder={worldwideCover.picture_small}
          srcSet={extractImageSizes(worldwideCover)}
          artists={extractFeaturedArtists(worldwideCover.tracks)}
        />
      </div>
      <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
        <PlaylistCover
          id={moroccoCover.id}
          type={STACKED_UI}
          title={moroccoCover.title}
          src={moroccoCover.picture}
          placeholder={moroccoCover.picture_small}
          srcSet={extractImageSizes(moroccoCover)}
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
            title={data.title}
            src={data.picture}
            placeholder={data.picture_small}
            srcSet={extractImageSizes(data)}
            artists={extractFeaturedArtists(data.tracks)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default HomeContainer;
