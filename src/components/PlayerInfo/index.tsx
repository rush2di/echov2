export interface PlayerInfoProps {
  image: string;
  title: string;
  artist: string;
}

const PlayerInfo = ({ image, title, artist }: PlayerInfoProps) => {
  return (
    <div className="playerInfo">
      <img src={image} alt="soundtrack cover" />
      <div className="playerInfo__text ml-1">
        <p className="txt-btn">{title}</p>
        <p className="txt-sm">{artist}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
