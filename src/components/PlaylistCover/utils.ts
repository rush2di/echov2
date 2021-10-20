interface parseFeaturedArtistsArgs {
  pattern: string;
  modifier: string;
  artists: string[];
}

export const parseFeaturedArtists = ({
  pattern,
  modifier,
  artists,
}: parseFeaturedArtistsArgs) => {
  const SEPARETOR_STR: string = ", ";

  const parsedString: string =
    artists.length > 3
      ? artists.slice(0, 3).join(SEPARETOR_STR)
      : artists.join(SEPARETOR_STR);

  return pattern.replace(modifier, parsedString);
};
