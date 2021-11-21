import { v4 as uuid } from "uuid";

import Table from "components/Table";
import Avatar from "components/Avatar";
import ProfileCover from "components/ProfileCover";

import { SM_SIZE } from "components/Avatar/constants";
import { authImage } from "helpers/constants";

const IF_EMPTY_MESSAGE = "No downloads yet!";

const Downloads = ({ currentUser }) => {
  return (
    <div className="downloads py-1">
      <ProfileCover
        cover={authImage}
        image={currentUser.avatar}
        username={currentUser.fullname}
      />
      <div className="mt-5">
        {currentUser.downloadedTracks.length > 0 ? (
          <Table title={`${currentUser.fullname}'s downloads`}>
            {currentUser.downloadedTracks.map((track) => {
              return (
                <Avatar
                  key={uuid()}
                  includeLabels
                  image={track.artist_picture}
                  title={track.artist_name}
                  songNames={track.title}
                  size={SM_SIZE}
                />
              );
            })}
          </Table>
        ) : (
          <p className="txt txt-label txt-center">{IF_EMPTY_MESSAGE}</p>
        )}
      </div>
    </div>
  );
};

export default Downloads;
