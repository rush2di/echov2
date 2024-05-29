import axios from "axios";
import { TrackDataType } from "containers/App/types";

import { BACKEND_URL, BACKEND_YT_URL, TIMEOUT } from "./constants";

const request = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});

const getPlaylists = async () => {
  return await request.get(`/api/playlists/`);
};

const getPlaylistData = async (playlistID: string | number) => {
  return await request.get(`/api/playlists/${playlistID}`);
};

const getDownloadTrack = async (trackID: string | number) => {
  console.log("getDownloadTrack", trackID);
  return await axios({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: "https://yttomp3backend.vercel.app/api/fetchVideo",
    data: { text: trackID },
  }); /* axios.post(
    `https://yttomp3backend.vercel.app/api/fetchVideo` as string,
    { text: trackID }
  ); */
};

const getUserData = async (user: any) => {
  return await request.get(`/users/auth/${user.uid}`);
};

const saveUserToDB = async (user: any, displayName: string) => {
  const payload = {
    uid: user.uid,
    fullname: displayName,
    email: user.email,
  };
  return await request.post(`/users/register/${user.uid}`, payload);
};

const saveUserLikedTrack = async (
  userUID: string,
  likedTracks: TrackDataType[]
) => {
  const body = {
    likedTracks,
  };
  return await request.post(`/users/${userUID}/likes`, body);
};

const saveUserDownloadedTrack = async (
  userUID: string,
  downloadedTracks: TrackDataType[]
) => {
  const body = {
    downloadedTracks,
  };
  return await request.post(`/users/${userUID}/downloads`, body);
};

export {
  getPlaylists,
  getPlaylistData,
  getDownloadTrack,
  saveUserLikedTrack,
  saveUserDownloadedTrack,
  saveUserToDB,
  getUserData,
};
