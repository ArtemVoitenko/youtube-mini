import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon";
import "./languages-page.scss";
const LanguagesPage = () => {
  const setLanguageToStorage = e => {
    let target = e.target;
    while (!target.dataset.locale) {
      target = target.parentNode;
    }
    const locale = target.dataset.locale;
    localStorage.setItem("lang", JSON.stringify(locale));
  };
  return (
    <div className="languages-block">
      <Link
        className="languages-block__link"
        onClick={setLanguageToStorage}
        data-locale="ru"
        to="/youtube-mini/ru"
      >
        <Icon data-locale="ru" iconClass="languages-block__icon" icon="ru" />{" "}
        Russian
      </Link>
      <Link
        className="languages-block__link"
        onClick={setLanguageToStorage}
        data-locale="en"
        to="/youtube-mini"
      >
        <Icon data-locale="en" iconClass="languages-block__icon" icon="en" />{" "}
        English
      </Link>
    </div>
  );
};
export default LanguagesPage;
