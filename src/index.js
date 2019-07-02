import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import { YoutubeServiceProvider } from "./components/youtube-service-context";
import YoutubeService from "./services/youtube-service";
const youtubeService = new YoutubeService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <YoutubeServiceProvider value={youtubeService}>
        <Router>
          <App />
        </Router>
      </YoutubeServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
