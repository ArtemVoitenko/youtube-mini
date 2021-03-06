const initialState = {
  searchResults: null,
  playVideoInfo: null,
  playVideoId: null,
  watchedVideos: null,
  Intl: { locale: null }
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
