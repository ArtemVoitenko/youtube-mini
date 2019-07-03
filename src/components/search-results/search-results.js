import React, { Component } from "react";
import SearchResultsItem from "../search-results-item/search-results-item";
import { connect } from "react-redux";

class SearchResults extends Component {
  renderResults = () => {
    const { results } = this.props;
    return results.map(video => {
      return (
        <SearchResultsItem
          key={video.id.videoId}
          id={video.id.videoId}
          title={video.snippet.title}
          thumb={video.snippet.thumbnails.default.url}
          votes={1}
        />
      );
    });
  };
  render() {
    return <div className="search-results">{this.renderResults()}</div>;
  }
}

export default connect(mapStateToProps)(SearchResults);
