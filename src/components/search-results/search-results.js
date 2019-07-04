import React from "react";
import SearchResultsItem from "../search-results-item/search-results-item";

import { withTranslate } from "react-redux-multilingual";
const SearchResults = ({ results, playVideo }) => {
  const renderResults = () => {
    return results.map(video => {
      return (
        <SearchResultsItem
          key={video.id.videoId}
          id={video.id.videoId}
          title={video.snippet.title}
          thumb={video.snippet.thumbnails.default.url}
          votes={1}
          playVideo={playVideo}
        />
      );
    });
  };

  return <div className="search-results">{renderResults()}</div>;
};

export default SearchResults;
