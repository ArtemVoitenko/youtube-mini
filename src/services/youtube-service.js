const axios = require("axios");
class YoutubeService {
  _apiSearchBase =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyC8-OMvrXtfXgFmC04WiXXrK9MVkLiRH3Y&q=";

  getSearchedVideos = query => {
    return axios({
      method: "get",
      url: `${this._apiSearchBase}${query}`
    }).then(result => {
      const res = JSON.parse(result.request.response);
      return res.items;
    });
  };
}

export default YoutubeService;
