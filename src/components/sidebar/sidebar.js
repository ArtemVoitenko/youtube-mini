import React from "react";
import { withTranslate } from "react-redux-multilingual";
import "./sidebar.scss";
const Sidebar = ({
  removeWatchedVideo,
  onPlayWatchedVideo,
  watchedVideos,
  translate,
  activeVideo
}) => {
  const renderItems = () => {
    return [...watchedVideos].reverse().map(video => {
      return (
        <li
          key={video.id}
          className={`watched__item ${activeVideo == video.id ? "active" : ""}`}
          onClick={() => {
            onPlayWatchedVideo(video.id);
          }}
        >
          <img src={video.thumb} alt={video.title} className="watched__thumb" />
          <p className="watched__title">{video.title}</p>

          <button
            className="watched__remove"
            onClick={e => {
              e.stopPropagation();
              removeWatchedVideo(video.id);
            }}
          >
            {translate("remove")}
          </button>
        </li>
      );
    });
  };
  return (
    <div className="sidebar">
      <p className="sidebar__title">{translate("watchedTitle")}</p>
      {watchedVideos ? (
        <ul className="watched">{renderItems()}</ul>
      ) : (
        <p className="sidebar__message">{translate("watchedEmpty")}</p>
      )}
    </div>
  );
};

export default withTranslate(Sidebar);
