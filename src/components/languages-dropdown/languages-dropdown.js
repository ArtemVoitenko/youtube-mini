import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class LanguagesDropdown extends Component {
  state = {
    dropdownVisible: false
  };
  setLanguageToStorage = e => {
    const locale = e.target.dataset.locale;
    localStorage.setItem("lang", JSON.stringify(locale));
  };
  render() {
    const { activeLanguage } = this.props;
    const { dropdownVisible } = this.state;
    return (
      <div className="languages">
        <button class="languages__button">{activeLanguage}</button>
        <div
          className={`languages__dropdown ${dropdownVisible ? "active" : ""}`}
        />
        <Link onClick={this.setLanguageToStorage} data-locale="ru" to="/ru">
          Русский
        </Link>
        <Link onClick={this.setLanguageToStorage} data-locale="en" to="/">
          English
        </Link>
      </div>
    );
  }
}
