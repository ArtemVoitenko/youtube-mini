import React, { Fragment } from "react";
import MainPage from "../main-page";
import { Route } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

const App = ({ translate }) => {
  const mainRoute = translate("locale");
  console.log(mainRoute);
  return (
    <Fragment>
      <Route
        exact
        path={"/ru"}
        render={() => {
          return <MainPage lang="ru" />;
        }}
      />
      <Route
        exact
        path={"/"}
        render={() => {
          return <MainPage lang="en" />;
        }}
      />
      {/* <Route path="/langs" component={Languages} /> */}
    </Fragment>
  );
};

export default withTranslate(App);
