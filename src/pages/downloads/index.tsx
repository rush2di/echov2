import { v4 as uuid } from "uuid";

const Downloads = ({ currentUser }) => {
  return (
    <div className="downloads">
      {currentUser.downloadedTracks.map((tracks) => {
        <div key={uuid()}>{tracks.title}</div>;
      })}
    </div>
  );
};

export default Downloads;
