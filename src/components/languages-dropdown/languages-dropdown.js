import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon";
import "./languages.scss";
export default class LanguagesDropdown extends Component {
  state = {
    dropdownVisible: false
  };
  setLanguageToStorage = e => {
    this.setState({
      dropdownVisible: false
    });
    let target = e.target;
    while (!target.dataset.locale) {
      target = target.parentNode;
    }
    const locale = target.dataset.locale;
    localStorage.setItem("lang", JSON.stringify(locale));
  };
  toggleLanguagesDropdown = () => {
    this.setState(({ dropdownVisible }) => {
      return {
        dropdownVisible: !dropdownVisible
      };
    });
  };
  render() {
    const { activeLanguage } = this.props;
    const { dropdownVisible } = this.state;
    return (
      <div className="languages">
        <button
          onClick={this.toggleLanguagesDropdown}
          class={`languages__button ${dropdownVisible ? "active" : ""}`}
        >
          <Icon iconClass="languages__icon" icon={activeLanguage} />
          {activeLanguage}
        </button>
        <div
          className={`languages__dropdown ${dropdownVisible ? "active" : ""}`}
        >
          <Link
            className="languages__link"
            onClick={this.setLanguageToStorage}
            data-locale="ru"
            to="/ru"
          >
            <Icon data-locale="ru" iconClass="languages__icon" icon="ru" /> ru
          </Link>
          <Link
            className="languages__link"
            onClick={this.setLanguageToStorage}
            data-locale="en"
            to="/"
          >
            <Icon data-locale="en" iconClass="languages__icon" icon="en" /> en
          </Link>
        </div>
      </div>
    );
  }
}
