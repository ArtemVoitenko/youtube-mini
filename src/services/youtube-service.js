const axios = require("axios");
class YoutubeService {
  _apiSearchBase =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyCdB1wyB8GzS0At7xWSKldGm7O7oxJiNZ0&q=";

  requestVideos = query => {
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
