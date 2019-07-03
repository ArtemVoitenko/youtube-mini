import React, { Fragment, Component } from "react";
import Search from "../search";
import SearchResults from "../search-results";
import { connect } from "react-redux";

class MainPage extends Component {
  //   state = {
  //     searchResults: null
  //   };
  onSearch = searchResults => {
    console.log(searchResults);
    this.setState({ searchResults });
  };
  render() {
    // const { searchResults } = this.state;
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
const mapStateToProps = ({ videos }) => {
  return {
    results: videos
  };
};

export default connect()(MainPage);
