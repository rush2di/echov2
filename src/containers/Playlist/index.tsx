import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStructuredSelector } from "reselect";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import PlaylistItem from "components/PlaylistItem";
import ArtistsTable from "components/ArtistsTable";
import AdsBanner from "components/AdsBanner";
import Avatar from "components/Avatar";

import { SM_SIZE } from "components/Avatar/constants";
import { generateTitle } from "helpers/utils/playerStringUtils";
import { setPlayerState } from "containers/AudioPlayer/actions";
import { initHandleDownload, initHandleLike } from "helpers/handlers";
import {
  resetAudio,
  rankLeftFill,
  playlistFilter,
  artistsNumberToText,
} from "helpers/utils";

import {
  ARGS_REPLACER,
  ARGS_TEMPLATE,
  INFO_TEXT,
  INFO_ICON,
  ADVERTISMENT_IMAGE,
  ADVERTISMENT_ALT,
} from "./constants";
import "./styles.scss";
import {
  makeSelectPlayerState,
  makeSelectPlaylistID,
  makeSelectTrackIndex,
} from "./selectors";
import { artistsSum, topArtistsTracks } from "./utils";

const playlistAudioState = createStructuredSelector({
  currentPlaylistID: makeSelectPlaylistID(),
  currentTrackIndex: makeSelectTrackIndex(),
  isPlaying: makeSelectPlayerState(),
});

const PlaylistContainer = ({ data }) => {
  const dispatch = useDispatch();
  const { id: pageID } = useParams<{ id: string }>();

  const { currentPlaylistID, currentTrackIndex, isPlaying } =
    useSelector(playlistAudioState);

  const currentPlaylist = playlistFilter(data, currentPlaylistID || pageID);
  const playlistTracks = currentPlaylist.tracks;
  const playlistTitle = currentPlaylist.title;

  const handleLikeReaction = (
    e: SyntheticEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    initHandleLike({
      targetID: id,
    });
  };

  const handleDownload = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    initHandleDownload({
      data: data,
      currentPlaylistID: currentPlaylistID as string,
      currentTrackIndex: currentTrackIndex as number,
    });
  };

  const handleClick = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    const newtrackIndex = e.currentTarget.tabIndex;
    resetAudio({
      isPlaying,
      playlistID: currentPlaylistID,
      audioRef: { current: document.querySelector("audio") },
      progressRef: { current: document.querySelector(".progress__playedTime") },
      dispatch: () => {
        dispatch(setPlayerState({ currentTrackIndex: newtrackIndex }));
      },
    });
  };

  return (
    <>
      <h2 className="txt-h6 txt-sec my-1">{generateTitle(playlistTitle)}</h2>
      <div className="info-wrapper d-flex mb-1">
        <FontAwesomeIcon className="txt-md" icon={INFO_ICON} />
        <p className="txt-sm">{INFO_TEXT}</p>
      </div>
      <div className="py-1 main-wrapper">
        <div className="row no-wrap">
          <div className="col-8 col-sm-12 col-xsm-12">
            {playlistTracks.map((track, index) => {
              return (
                <div className="item-wrapper-1" key={uuidv4()}>
                  <PlaylistItem
                    id={track.id}
                    index={index}
                    isActive={currentTrackIndex === index}
                    rank={rankLeftFill(track.rank)}
                    handleDownload={handleDownload}
                    handleLikeReaction={handleLikeReaction}
                    artist={track.artist_name}
                    image={track.cover_medium}
                    onClick={handleClick}
                    title={track.title}
                    isLiked={false}
                  />
                  <hr className="my-0 bg-muted" />
                </div>
              );
            })}
          </div>
          <div className="col-4 col-sm-12 col-xsm-12">
            <div className="item-wrapper-2">
              <div>
                <ArtistsTable
                  label={artistsNumberToText(
                    ARGS_TEMPLATE,
                    ARGS_REPLACER,
                    artistsSum(playlistTracks)
                  )}
                >
                  {topArtistsTracks(playlistTracks)?.map((val) => {
                    return (
                      <Avatar
                        key={uuidv4()}
                        includeLabels
                        image={val.artist_picture}
                        title={val.artist_name}
                        songNames={val.tracks}
                        size={SM_SIZE}
                      />
                    );
                  })}
                </ArtistsTable>
              </div>
              <div className="mt-1">
                <AdsBanner
                  imageSrc={ADVERTISMENT_IMAGE}
                  imageAlt={ADVERTISMENT_ALT}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistContainer;
