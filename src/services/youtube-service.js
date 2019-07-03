const axios = require("axios");
class YoutubeService {
  _apiSearchBase =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyCQNj-pElIywgWZzO4dl9vjocVr_KO0WZM&q=";

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
