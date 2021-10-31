import Spinner from "components/Spinner";
import PageError from "containers/PageError";
import PlaylistContainer from "containers/Playlist";
import { PlaylistPageProps } from "./types";

const PlaylistPage = ({ data, isLoading, isError }: PlaylistPageProps) => {
  return (
    <PageError {...{ isLoading, isError }}>
      {data !== null ? <PlaylistContainer data={data} /> : <Spinner />}
    </PageError>
  );
};

export default PlaylistPage;
