const initialState = {
  test: "",
  searchResults: null,
  playVideoInfo: null,
  playVideoId: null,
  watchedVideos: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: "test"
      };
    case "VIDEOS_RETURNED": {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case "PLAY_VIDEO": {
      return {
        ...state,
        playVideoId: action.payload
      };
    }
    case "GET_WATCHED_VIDEOS":
      return {
        ...state,
        watchedVideos: action.payload
      };
    default:
      return state;
  }
};
