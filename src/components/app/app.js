import React, { Fragment, Component } from "react";
import MainPage from "../main-page";
import { Route } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import LanguagesPage from "../LanguagesPage";
import { withRouter } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    const activeLanguage = JSON.parse(localStorage.getItem("lang"));
    const { history } = this.props;
    if (!activeLanguage) {
      history.push("/langs");
    } else if (activeLanguage == "ru") {
      history.push("/ru");
    } else {
      history.push("/");
    }

    console.log(activeLanguage);
  }
  render() {
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
        <Route
          exact
          path={"/langs"}
          render={() => {
            return <LanguagesPage />;
          }}
        />
      </Fragment>
    );
  }
}

export default withTranslate(withRouter(App));
