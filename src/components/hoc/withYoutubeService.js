import React from "react";
import { YoutubeServiceConsumer } from "../youtube-service-context";

const withYoutubeService = () => Wrapped => {
  return props => {
    return (
      <YoutubeServiceConsumer>
        {youtubeService => {
          return <Wrapped {...props} youtubeService={youtubeService} />;
        }}
      </YoutubeServiceConsumer>
    );
  };
};
export default withYoutubeService;
