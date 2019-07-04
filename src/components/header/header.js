import React, { Component } from "react";
import Search from "../search";
import SearchResults from "../search-results";
import LanguagesDropdown from "../languages-dropdown";
import Icon from "../icon";
import "./header.scss";
const Header = ({ onSearch, results, playVideo, activeLanguage }) => {
  const showResults = results ? (
    <SearchResults results={results} playVideo={playVideo} />
  ) : null;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <Icon icon="youtube" iconClass="logo__icon" />
            You-mini
          </div>
          <div className="header__search">
            <Search onSearch={onSearch} />
            {showResults}
          </div>
          <LanguagesDropdown activeLanguage={activeLanguage} />
        </div>
      </div>
    </header>
  );
};
export default Header;
