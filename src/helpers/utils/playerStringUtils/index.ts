const rankLeftFill = (rank: number) => {
  return rank.toString().padStart(3, "0");
};

const artistsNumberToText = (
  pattern: string,
  modifier: string,
  artistsNumber: number | string
) => {
  const modified = artistsNumber.toString();
  return pattern.replace(modifier, modified);
};

const generateTitle = (str: string) => {
  const [titleMatch] = str.match(/(?<=Top\s).*/gi) as string[];
  return `Top \nMusic Tracks ${titleMatch}`;
};

export { rankLeftFill, artistsNumberToText, generateTitle };
