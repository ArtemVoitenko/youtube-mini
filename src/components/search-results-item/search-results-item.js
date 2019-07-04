import React from "react";

import { withTranslate } from "react-redux-multilingual";
const SearchResultsItem = ({
  id,
  title,
  thumb,
  votes,
  playVideo,
  translate
}) => {
  return (
    <div className="search-item">
      <img src={thumb} alt={title} className="search-item__thumb" />
      <p className="search-item__title">{title}</p>

      <button
        className="search-item__play"
        onClick={() => {
          playVideo({ id, thumb, title });
        }}
      >
        {translate("play")}
      </button>
    </div>
  );
};

export default withTranslate(SearchResultsItem);
