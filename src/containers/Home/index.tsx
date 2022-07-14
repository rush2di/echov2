import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import PlaylistCover from "components/PlaylistCover";

import {
  userChangeTrack,
  userSelectPlaylist,
  setDefaultPlaylist,
} from "containers/AudioPlayer/actions";
import { CARD_UI, STACKED_UI } from "components/PlaylistCover/constants";

import { FIRST_HEADING, SECOND_HEADING } from "./constants";
import { extractFeaturedArtists, extractImageSizes } from "./utils";

const HomeContainer = ({ worldwideCover, moroccoCover, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (id: string | number) => {
    dispatch(userChangeTrack(0));
    dispatch(userSelectPlaylist(id));
    history.push(`/playlist/${id}`);
  };

  useEffect(() => {
    dispatch(setDefaultPlaylist(worldwideCover.id));
  }, []);

  return (
    <div className="py-1">
      <h1 className="txt-h4 txt-prim mb-2">{FIRST_HEADING}</h1>
      <div className="row">
        <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
          <PlaylistCover
            id={worldwideCover.id}
            type={STACKED_UI}
            title={worldwideCover.title}
            src={worldwideCover.picture.replace("q_95", "q_95,f_jpg")}
            placeholder={worldwideCover.picture_small.replace(
              "q_95",
              "q_50,w_50,f_jpg"
            )}
            srcSet={extractImageSizes(worldwideCover)}
            artists={extractFeaturedArtists(worldwideCover.tracks)}
            onClick={handleClick}
          />
        </div>
        <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
          <PlaylistCover
            id={moroccoCover.id}
            type={STACKED_UI}
            title={moroccoCover.title}
            src={moroccoCover.picture.replace("q_95", "q_95,f_jpg")}
            placeholder={moroccoCover.picture_small.replace(
              "q_95",
              "q_50,w_50,f_jpg"
            )}
            srcSet={extractImageSizes(moroccoCover)}
            artists={extractFeaturedArtists(moroccoCover.tracks)}
            onClick={handleClick}
          />
        </div>
      </div>
      <h2 className="txt-h5 txt-prim mt-3 mb-2">{SECOND_HEADING}</h2>
      <div className="row">
        {data.map((data) => (
          <div
            key={data.id}
            className="col-3 col-lg-4 col-md-4 col-sm-6 col-xsm-12"
          >
            <PlaylistCover
              id={data.id}
              type={CARD_UI}
              title={data.title}
              src={data.picture.replace("q_95", "q_95,f_jpg")}
              placeholder={data.picture_small.replace("q_95", "q_50,w_50,f_jpg")}
              srcSet={extractImageSizes(data)}
              artists={extractFeaturedArtists(data.tracks)}
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeContainer;
