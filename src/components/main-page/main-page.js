import React, { Fragment, Component } from "react";
import Search from "../search";
import SearchResults from "../search-results";
import { connect } from "react-redux";
import { videosReturned, playVideo, getWatchedVideos } from "../../actions";
import Sidebar from "../sidebar";
import VideoPlayer from "../video-player";
import { IntlActions } from "react-redux-multilingual";
import LanguagesDropdown from "../languages-dropdown";

class MainPage extends Component {
  componentDidMount() {
    const { saveWatched, setLocale, lang } = this.props;
    saveWatched(this.getVideosFromStorage());
    setLocale(lang);
  }
  onSearch = searchResults => {
    this.props.setSearchResults(searchResults);
  };
  onPlayVideo = videoInfo => {
    this.props.playVideo(videoInfo.id);
    this.props.setSearchResults(null);
    this.setPlayedVideoToStorage(videoInfo);
  };
  getVideosFromStorage = () => {
    return JSON.parse(localStorage.getItem("watchedVideos"));
  };
  setPlayedVideoToStorage = videoInfo => {
    const videosInStorage = this.getVideosFromStorage();
    const isVideoExists = this.isElementExists(videoInfo, videosInStorage);
    if (isVideoExists) {
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
      this.props.saveWatched(this.getVideosFromStorage());
    }
  };

  isElementExists = (element, storageItems) => {
    if (storageItems) {
      const idx = storageItems.findIndex(item => {
        return item.id === element.id;
      });
      return idx != -1 ? true : false;
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
    const videosInStorage = this.getVideosFromStorage();
    const removeVideoIdx = this.findVideoById(videosInStorage, id);
    const newVideoList = [
      ...videosInStorage.slice(0, removeVideoIdx),
      ...videosInStorage.slice(removeVideoIdx + 1)
    ];
    localStorage.setItem("watchedVideos", JSON.stringify(newVideoList));
    this.props.saveWatched(newVideoList);
  };
  findVideoById = (videos, id) => {
    return videos.findIndex(item => {
      return item.id === id;
    });
  };
  render() {
    const {
      searchResults,
      playVideo,
      playVideoId,
      watchedVideos,
      lang
    } = this.props;

    const showResults = searchResults ? (
      <SearchResults results={searchResults} playVideo={this.onPlayVideo} />
    ) : null;
    return (
      <Fragment>
        <Search onSearch={this.onSearch} />
        <LanguagesDropdown activeLanguage={lang} />
        {showResults}
        <Sidebar
          onPlayWatchedVideo={playVideo}
          removeWatchedVideo={this.removeWatchedVideo}
          watchedVideos={watchedVideos}
        />
        <VideoPlayer videoId={playVideoId} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  reducer: { searchResults, playVideoId, watchedVideos }
}) => {
  return {
    searchResults,
    playVideoId,
    watchedVideos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setSearchResults: results => {
      dispatch(videosReturned(results));
    },
    playVideo: videoInfo => {
      dispatch(playVideo(videoInfo));
    },
    saveWatched: watchedVideos => {
      dispatch(getWatchedVideos(watchedVideos));
    },
    setLocale: locale => {
      dispatch(IntlActions.setLocale(locale));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
