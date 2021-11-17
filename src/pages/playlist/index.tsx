import PlaylistContainer from "containers/Playlist";
import { PlaylistPageProps } from "./types";

const PlaylistPage = ({ data }: PlaylistPageProps) => {
  return <PlaylistContainer data={data} />;
};

export default PlaylistPage;
