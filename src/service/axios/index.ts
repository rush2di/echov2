import axios from "axios";
import { TrackDataType } from "containers/App/types";

import { BACKEND_URL, TIMEOUT } from "./constants";

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
  const options = {
    method: "GET",
    url: "https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess",
    params: {
      url: `https://www.youtube.com/watch?v=${trackID}`,
      format: "mp3",
      responseFormat: "json",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "cb947b6b76msh4af8d41eba1e7c1p10758djsnf74806413b8d",
      "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com",
    },
  };

  return await axios.request(options as any);
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
