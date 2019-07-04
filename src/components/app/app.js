import React, { Fragment, Component } from "react";
import MainPage from "../main-page";
import { Route } from "react-router-dom";
import LanguagesPage from "../languages-page";
import { withRouter } from "react-router-dom";
import "../../../node_modules/normalize-scss/sass/normalize/_import-now.scss";
import "../../styles/styles.scss";
class App extends Component {
  componentDidMount() {
    this.checkActiveLanguage();
  }
  checkActiveLanguage = () => {
    const activeLanguage = JSON.parse(localStorage.getItem("lang"));
    const { history } = this.props;
    if (!activeLanguage) {
      history.push("/langs");
    } else if (activeLanguage == "ru") {
      history.push("/ru");
    } else {
      history.push("/");
    }
  };
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
        <Route exact path={"/langs"} component={LanguagesPage} />
      </Fragment>
    );
  }
}

export default withRouter(App);
