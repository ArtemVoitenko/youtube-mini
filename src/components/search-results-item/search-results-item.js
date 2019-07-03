import React from "react";

const SearchResultsItem = ({ id, title, thumb, votes, playVideo }) => {
  return (
    <div className="search-item">
      <img src={thumb} alt={title} className="search-item__thumb" />
      <p className="search-item__title">{title}</p>
      <div className="search-item__votes">{votes}</div>
      <button
        className="search-item__play"
        onClick={() => {
          playVideo({ id, thumb, title });
        }}
      >
        play
      </button>
    </div>
  );
};

export default SearchResultsItem;
