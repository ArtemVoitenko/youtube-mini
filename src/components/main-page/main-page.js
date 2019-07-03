import React, { Fragment, Component } from "react";
import Search from "../search";
import SearchResults from "../search-results";

class MainPage extends Component {
  state = {
    searchResults: null
  };
  onSearch = searchResults => {
    console.log(searchResults);
    this.setState({ searchResults });
  };
  render() {
    const { searchResults } = this.state;
    const showResults = searchResults ? (
      <SearchResults results={searchResults} />
    ) : null;
    return (
      <Fragment>
        <Search onSearch={this.onSearch} />
        {showResults}
      </Fragment>
    );
  }
}

export default MainPage;
