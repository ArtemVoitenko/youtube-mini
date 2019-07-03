const initialState = {
  test: "",
  searchResults: null,
  playVideoInfo: null,
  playVideoId: null
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
    default:
      return state;
  }
};
