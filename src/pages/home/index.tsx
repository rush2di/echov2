import HomeContainer from "containers/Home";

import { mainCoverCountries } from "./constants";
import { HomePageProps } from "./types";

const HomePage = ({ data }: HomePageProps) => {
  const worldwidePlaylist = data.findIndex((val) =>
    val.title.includes(mainCoverCountries[0])
  ) as number;
  const moroccoPlaylist = data.findIndex((val) =>
    val.title.includes(mainCoverCountries[1])
  ) as number;

  const newData = data.filter(
    (_, index) => [worldwidePlaylist, moroccoPlaylist].indexOf(index) == -1
  );

  return (
    <HomeContainer
      worldwideCover={data[worldwidePlaylist]}
      moroccoCover={data[moroccoPlaylist]}
      data={newData}
    />
  );
};

export default HomePage;
