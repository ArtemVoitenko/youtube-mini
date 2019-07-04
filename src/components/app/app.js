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
      history.push("/youtube-mini/langs/");
    } else if (activeLanguage == "ru") {
      history.push("/youtube-mini/ru");
    } else {
      history.push("/youtube-mini");
    }
  };
  render() {
    return (
      <Fragment>
        <Route
          exact
          path={"/youtube-mini/ru"}
          render={() => {
            return <MainPage lang="ru" />;
          }}
        />
        <Route
          exact
          path={"/youtube-mini"}
          render={() => {
            return <MainPage lang="en" />;
          }}
        />
        <Route exact path={"/youtube-mini/langs"} component={LanguagesPage} />
      </Fragment>
    );
  }
}

export default withRouter(App);
