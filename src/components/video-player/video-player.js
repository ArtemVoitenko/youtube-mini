import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 1
    }
  };
  return <YouTube videoId={videoId} opts={opts} />;
};
export default VideoPlayer;
