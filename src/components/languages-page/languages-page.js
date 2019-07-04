import React from "react";
import { Link } from "react-router-dom";

const LanguagesPage = () => {
  const setLanguageToStorage = e => {
    const locale = e.target.dataset.locale;
    localStorage.setItem("lang", JSON.stringify(locale));
  };
  return (
    <div className="languages-page">
      <Link onClick={setLanguageToStorage} data-locale="ru" to="/ru">
        Русский
      </Link>
      <Link onClick={setLanguageToStorage} data-locale="en" to="/">
        English
      </Link>
    </div>
  );
};
export default LanguagesPage;
