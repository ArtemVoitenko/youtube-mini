import React, { Fragment, Component } from "react";
import Search from "../search";
import SearchResults from "../search-results";
import { connect } from "react-redux";
import { dispatch } from "react-redux";
import { videosReturned, playVideo } from "../../actions";
import Sidebar from "../sidebar";
import VideoPlayer from "../video-player";

class MainPage extends Component {
  onSearch = searchResults => {
    this.props.setSearchResults(searchResults);
  };
  onPlayVideo = videoInfo => {
    this.props.playVideo(videoInfo.id);
    this.setPlayedVideoToStorage(videoInfo);
  };

  setPlayedVideoToStorage = videoInfo => {
    const videosInStorage = JSON.parse(localStorage.getItem("watchedVideos"));
    const isVideoExists = this.isElementExists(videoInfo, videosInStorage);
    if (isVideoExists != -1) {
      return;
    } else {
      if (videosInStorage && videosInStorage.length >= 5) {
        const cutVideoList = videosInStorage.slice(1, 5);
        this.setItemsToLocalStorage(videoInfo, cutVideoList);
      } else if (videosInStorage && videosInStorage.length > 0) {
        this.setItemsToLocalStorage(videoInfo, videosInStorage);
      } else {
        this.setItemsToLocalStorage(videoInfo);
      }
    }
  };

  isElementExists = (element, storageItems) => {
    if (storageItems) {
      const idx = storageItems.findIndex(item => {
        return item.id === element.id;
      });
      return idx;
    } else {
      return false;
    }
  };
  setItemsToLocalStorage = (newItem, prevItems = []) => {
    localStorage.setItem(
      "watchedVideos",
      JSON.stringify([...prevItems, newItem])
    );
  };
  removeWatchedVideo = id => {
    const videosInStorage = JSON.parse(localStorage.getItem("watchedVideos"));
    const removeVideoIdx = this.findVideoById(videosInStorage, id);
    const newVideoList = [
      ...videosInStorage.slice(0, removeVideoIdx),
      ...videosInStorage.slice(removeVideoIdx + 1)
    ];
    localStorage.setItem("watchedVideos", JSON.stringify(newVideoList));
  };
  findVideoById = (videos, id) => {
    return videos.findIndex(item => {
      return item.id === id;
    });
  };
  render() {
    const { searchResults, playVideo, playVideoId } = this.props;
    const showResults = searchResults ? (
      <SearchResults results={searchResults} playVideo={this.onPlayVideo} />
    ) : null;
    return (
      <Fragment>
        <Search onSearch={this.onSearch} />
        {showResults}
        <Sidebar
          onPlayWatchedVideo={playVideo}
          removeWatchedVideo={this.removeWatchedVideo}
        />
        <VideoPlayer videoId={playVideoId} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ searchResults, playVideoId }) => {
  return {
    searchResults,
    playVideoId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setSearchResults: results => {
      dispatch(videosReturned(results));
    },
    playVideo: videoInfo => {
      dispatch(playVideo(videoInfo));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
