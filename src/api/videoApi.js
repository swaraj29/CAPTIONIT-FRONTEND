import axios from 'axios';

const BASE_URL = 'https://reely-json-server.onrender.com/videos';

// GET all videos
export const getAllVideos = () => axios.get(BASE_URL);

// GET one video by ID
export const getVideoById = (id) => axios.get(`${BASE_URL}/${id}`);

// POST new video
export const createVideo = (data) => axios.post(BASE_URL, data);

// PATCH update video
export const updateVideo = (id, data) => axios.patch(`${BASE_URL}/${id}`, data);

// DELETE video (if needed)
export const deleteVideo = (id) => axios.delete(`${BASE_URL}/${id}`);
