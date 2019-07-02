import React from "react";
const {
  Provider: YoutubeServiceProvider,
  Consumer: YoutubeServiceConsumer
} = React.createContext();

export { YoutubeServiceConsumer, YoutubeServiceProvider };
