import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

import PlaylistItem from "components/PlaylistItem";
import Table from "components/Table";
import AdsBanner from "components/AdsBanner";
import Avatar from "components/Avatar";

import { animateDownloadIcon, generateTitle } from "helpers/utils";
import { SM_SIZE } from "components/Avatar/constants";
import { setPlayerState } from "containers/AudioPlayer/actions";
import { initHandleDownload, initHandleLike } from "helpers/handlers";
import { makeSelectPendingDownloads } from "containers/App/selectors";
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
import {
  makeSelectPlayerState,
  makeSelectPlaylistID,
  makeSelectTrackIndex,
} from "./selectors";
import { artistsSum, topArtistsTracks } from "./utils";
import { isTrackLiked } from "helpers/utils/syncedPlayerUtils/styles";
import "./styles.scss";

const playlistAudioState = createStructuredSelector({
  pendingDownloadsUIDs: makeSelectPendingDownloads(),
  currentPlaylistID: makeSelectPlaylistID(),
  currentTrackIndex: makeSelectTrackIndex(),
  isPlaying: makeSelectPlayerState(),
});

const PlaylistContainer = ({ data }) => {
  const dispatch = useDispatch();
  const { id: pageID } = useParams<{ id: string }>();

  const {
    isPlaying,
    currentTrackIndex,
    currentPlaylistID,
    pendingDownloadsUIDs,
  } = useSelector(playlistAudioState);

  const currentPlaylist = playlistFilter(data, currentPlaylistID || pageID);
  const playlistTracks = currentPlaylist.tracks;
  const playlistTitle = currentPlaylist.title;

  const handleLikeReaction = (
    event: SyntheticEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    event.stopPropagation();
    initHandleLike({
      data,
      targetID: id,
      currentPlaylistID: currentPlaylistID as string,
    });
  };

  const handleDownload = (
    event: SyntheticEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newtrackIndex = event.currentTarget.tabIndex;
    initHandleDownload({
      data: data,
      currentPlaylistID: currentPlaylistID as string,
      currentTrackIndex: newtrackIndex as number,
    });
  };

  const handleClick = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    const newtrackIndex = event.currentTarget.tabIndex;
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
                    title={track.title}
                    image={track.cover_medium}
                    artist={track.artist_name}
                    rank={rankLeftFill(track.rank)}
                    handleLikeReaction={handleLikeReaction}
                    handleDownload={handleDownload}
                    onClick={handleClick}
                    isPending={
                      animateDownloadIcon({
                        pendingList: pendingDownloadsUIDs,
                        trackUID: track.id,
                      }).animated
                    }
                    isActive={currentTrackIndex === index}
                    isLiked={isTrackLiked({ trackUID: track.id })}
                  />
                  <hr className="my-0 bg-muted" />
                </div>
              );
            })}
          </div>
          <div className="col-4 col-sm-12 col-xsm-12">
            <div className="item-wrapper-2">
              <div>
                <Table
                  label={artistsNumberToText(
                    ARGS_TEMPLATE,
                    ARGS_REPLACER,
                    artistsSum(playlistTracks)
                  )}
                >
                  {topArtistsTracks(playlistTracks)?.map((val) => {
                    return (
                      <li key={uuidv4()}>
                        <Avatar
                          includeLabels
                          image={val.artist_picture}
                          title={val.artist_name}
                          songNames={val.tracks}
                          size={SM_SIZE}
                        />
                      </li>
                    );
                  })}
                </Table>
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
