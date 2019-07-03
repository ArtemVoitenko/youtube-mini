import React from "react";

const Sidebar = ({ removeWatchedVideo, onPlayWatchedVideo }) => {
  const watchedVideos = JSON.parse(localStorage.getItem("watchedVideos"));
  const renderItems = () => {
    return [...watchedVideos].reverse().map(video => {
      return (
        <li
          key={video.id}
          className="watched__item"
          onClick={() => {
            onPlayWatchedVideo(video.id);
          }}
        >
          <img src={video.thumb} alt={video.title} className="watched__thumb" />
          <p className="watched__title">{video.title}</p>

          <button
            className="watched__remove"
            onClick={() => {
              removeWatchedVideo(video.id);
            }}
          >
            remove
          </button>
        </li>
      );
    });
  };
  return (
    <div className="sidebar">
      {watchedVideos ? <ul className="watched">{renderItems()}</ul> : null}
    </div>
  );
};

export default Sidebar;
