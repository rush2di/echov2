import axios from "axios";

import { BACKEND_URL, TIMEOUT } from "./constants";

const request = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});

const getPlaylists = async () => await request.get(`/api/playlists/`);

const getPlaylistData = async (playlistID: string | number) =>
  await request.get(`/api/playlists/${playlistID}`);

const getDownloadTrack = async (trackID: string | number) =>
  await request.get(`/api/track/${trackID}`);

const saveUserToDB = (user) => {
  const payload = {
    uid: user.uid,
    fullname: user.displayName,
    email: user.email,
  };
  request.post(`/register/users/`, payload);
};

export { getPlaylists, getPlaylistData, getDownloadTrack, saveUserToDB };
