import HomeContainer from "containers/Home";
import PageError from "containers/PageError";

import { mainCoverCountries } from "./constants";
import { PlaylistDataType } from "containers/App/types";
import { HomePageProps } from "./types";

const HomePage = ({ data, isLoading, isError }: HomePageProps) => {
  const worldwidePlaylist = data?.findIndex((val) =>
    val.title.includes(mainCoverCountries[0])
  ) as number;
  const moroccoPlaylist = data?.findIndex((val) =>
    val.title.includes(mainCoverCountries[1])
  ) as number;

  const newData = data?.filter(
    (_, index) => [worldwidePlaylist, moroccoPlaylist].indexOf(index) == -1
  ) as PlaylistDataType[];

  return (
    <PageError {...{ isLoading, isError }}>
      {data && (
        <HomeContainer
          worldwideCover={data[worldwidePlaylist]}
          moroccoCover={data[moroccoPlaylist]}
          data={newData}
        />
      )}
    </PageError>
  );
};

export default HomePage;
