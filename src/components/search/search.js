import React, { Component } from "react";
import { directive } from "@babel/types";
import { withYoutubeService } from "../hoc";
class Search extends Component {
  state = {
    query: ""
  };
  onSearchInput = async e => {
    const query = e.target.value;
    this.setState({
      query
    });
    if (query.length > 3) {
      const results = await this.getVideos(query);
      this.props.onSearch(results);
    } else {
      this.props.onSearch(null);
    }
  };
  getVideos = query => {
    return this.props.youtubeService.requestVideos(query);
  };
  render() {
    const { query } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          onChange={this.onSearchInput}
          value={query}
        />
      </div>
    );
  }
}

export default withYoutubeService()(Search);
