import { AvatarProps } from "components/Avatar";
import { PlaylistCoverProps } from "components/PlaylistCover";
import { PlaylistItemProps } from "components/PlaylistItem";

const cover =
  "https://static.overlay-tech.com/assets/f7933cfb-ae5e-4070-bd43-c054b3b9e13e.png";

const avatarTest: AvatarProps = {
  includeLabels: true,
  title: "Kelyan Mbappe",
  image: cover,
  size: "sm",
  songNames: "Blinding Lights, Dance Floor",
};

const playlistTest: PlaylistItemProps[] = [...new Array(100)].map(() => ({
  rank: "001",
  image: cover,
  title: "Blinding lights",
  artist: "The Weekend",
  isLiked: false,
}));

const testProps: PlaylistCoverProps[] = [
  {
    title: "Top 100 Morocco",
    type: "card",
    artists: ["Draganov", "ElgrandeToto", "Inkonu"],
    img: "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png",
  },
  {
    title: "Top 100 Morocco",
    type: "card",
    artists: ["Draganov", "ElgrandeToto", "Inkonu"],
    img: "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png",
  },
  {
    title: "Top 100 Morocco",
    type: "card",
    artists: ["Draganov", "ElgrandeToto", "Inkonu"],
    img: "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png",
  },
  {
    title: "Top 100 Morocco",
    type: "card",
    artists: ["Draganov", "ElgrandeToto", "Inkonu"],
    img: "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png",
  },
];

export { testProps, playlistTest, avatarTest };
