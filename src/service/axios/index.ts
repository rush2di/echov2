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

const getUserData = async (user: any) =>
  await request.get(`/users/auth/${user.uid}`);

const saveUserToDB = async (user: any, displayName: string) => {
  const payload = {
    uid: user.uid,
    fullname: displayName,
    email: user.email,
  };
  return await request.post(`/users/register/${user.uid}`, payload);
};

export {
  getPlaylists,
  getPlaylistData,
  getDownloadTrack,
  saveUserToDB,
  getUserData,
};
