import React from "react";

const SearchResultsItem = ({ id, title, thumb, votes, playVideo }) => {
  return (
    <div className="search-item">
      <img src={thumb} alt={title} className="search-item__thumb" />
      <div className="search-item__votes">{votes}</div>
      <button
        className="search-item__play"
        onClick={() => {
          playVideo(id);
        }}
      >
        play
      </button>
    </div>
  );
};

export default SearchResultsItem;
