export const videosReturned = videos => {
  return {
    type: "VIDEOS_RETURNED",
    payload: videos
  };
};
export const playVideo = videoInfo => {
  return {
    type: "PLAY_VIDEO",
    payload: videoInfo
  };
};
export const getWatchedVideos = watchedVideos => {
  return { type: "GET_WATCHED_VIDEOS", payload: watchedVideos };
};
