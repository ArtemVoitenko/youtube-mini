import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import { YoutubeServiceProvider } from "./components/youtube-service-context";
import YoutubeService from "./services/youtube-service";
import translations from "./translations";
import { IntlProvider } from "react-redux-multilingual";
const youtubeService = new YoutubeService();
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale="en">
      <ErrorBoundry>
        <YoutubeServiceProvider value={youtubeService}>
          <Router>
            <App />
          </Router>
        </YoutubeServiceProvider>
      </ErrorBoundry>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
