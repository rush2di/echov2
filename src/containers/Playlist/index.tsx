import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import PlaylistItem from "components/PlaylistItem";
import ArtistsTable from "components/ArtistsTable";
import Avatar from "components/Avatar";

import { SM_SIZE } from "components/Avatar/constants";
import { generateTitle } from "helpers/utils/playerStringUtils";
import { AudioPlayerState } from "containers/AudioPlayer/types";
import { setPlayerState } from "containers/AudioPlayer/actions";
import { selectPlayerState } from "containers/AudioPlayer/selectors";

import {
  resetAudio,
  rankLeftFill,
  playlistFilter,
  artistsNumberToText,
} from "helpers/utils";
import { artistsSum, topArtistsTracks } from "./utils";
import {
  ARGS_REPLACER,
  ARGS_TEMPLATE,
  INFO_TEXT,
  INFO_ICON,
} from "./constants";
import fallbackImage from "assets/images/album_cover.png";
import "./styles.scss";

const PlaylistContainer = ({ data }) => {
  const dispatch = useDispatch();

  const { currentPlaylistID, currentTrackIndex, isPlaying } = useSelector<
    AudioPlayerState,
    AudioPlayerState
  >(selectPlayerState);

  const currentPlaylist = playlistFilter(data, currentPlaylistID);
  const playlistTracks = currentPlaylist.tracks;
  const playlistTitle = currentPlaylist.title;

  const handleClick = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    const newtrackIndex = parseInt(e.currentTarget.id);
    resetAudio({
      playlistID: currentPlaylistID,
      audioRef: { current: document.querySelector("audio") },
      progressRef: { current: document.querySelector(".progress__playedTime") },
      isPlaying: isPlaying,
      dispatch: () =>
        dispatch(setPlayerState({ currentTrackIndex: newtrackIndex })),
    });
  };

  return (
    <>
      <h2 className="txt-h6 txt-sec my-1">
        {!!currentPlaylistID && generateTitle(playlistTitle)}
      </h2>
      <div className="info-wrapper d-flex mb-1">
        <FontAwesomeIcon className="txt-md" icon={INFO_ICON} />
        <p className="txt-sm">{INFO_TEXT}</p>
      </div>
      <div className="py-1 main-wrapper">
        <div className="row no-wrap">
          <div className="col-8 col-sm-12 col-xsm-12">
            {!!currentPlaylistID &&
              playlistTracks.map((track, index) => {
                return (
                  <div className="item-wrapper-1" key={uuidv4()}>
                    <PlaylistItem
                      id={`${track.rank - 1}`}
                      isActive={currentTrackIndex === index}
                      rank={rankLeftFill(track.rank)}
                      artist={track.artist_name}
                      image={fallbackImage}
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
              {!!playlistTracks && (
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
                        includeLabels
                        image={fallbackImage}
                        title={val.artist_name}
                        songNames={val.tracks}
                        size={SM_SIZE}
                      />
                    );
                  })}
                </ArtistsTable>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistContainer;
