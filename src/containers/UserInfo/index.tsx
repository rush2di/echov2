import { v4 as uuid } from "uuid";

import Table from "components/Table";
import Avatar from "components/Avatar";
import ProfileCover from "components/ProfileCover";

import { SM_SIZE } from "components/Avatar/constants";
import { authImage } from "helpers/constants";
import { UserInfoProps } from "./types";
import { fallbackText, pageTypes } from "./constants";

const UserInfo = ({ currentUser, pageType }: UserInfoProps) => {
  const fallbackMessage =
    pageType === pageTypes.DOWNLOADS
      ? fallbackText.DOWNLOADS
      : fallbackText.LIKES;

  const targetData =
    pageType === pageTypes.DOWNLOADS
      ? currentUser.downloadedTracks
      : currentUser.likedTracks;

  return (
    <div className="downloads py-1">
      <ProfileCover
        cover={authImage}
        image={currentUser.avatar}
        username={currentUser.fullname}
      />
      <div className="mt-5">
        {targetData.length > 0 ? (
          <Table title={`${currentUser.fullname}'s ${pageType}`}>
            {targetData.map((track) => {
              return (
                <li key={uuid()}>
                  <Avatar
                    includeLabels
                    image={track.artist_picture}
                    title={track.artist_name}
                    songNames={track.title}
                    size={SM_SIZE}
                  />
                </li>
              );
            })}
          </Table>
        ) : (
          <p className="txt txt-label txt-center">{fallbackMessage}</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
