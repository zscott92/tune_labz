var http = require("https");
require("dotenv");
var http = require("https");

function SpotifyApi() {
  var spotifySearch = {
    "method": "GET",
    "hostname": "api.spotify.com",
    "port": null,
    "path": "/v1/search/?q=" + search + "&type=artist",
    "headers": {
      "content-length": "0",
      "authorization": "Bearer BQBR6wcdCFa2CqemL6GtRC1wI2OYxoQyDYygN4Q5VL7TWemgeSCIk5hWqFMVFFojQ5_-krYtseInyisFwe0NjlM3RUlEi0r57OQdM7_edtYC6dMBfvwakFECeDCNU0cp06qbdbFalnrxHwoOaJfQ"
    }
  };

  let data = "";
  var req = http.request(spotifySearch, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      data = body.toJSONString();
    });
  });
  req.end();

  var trackRecording = jsonPath(data, "$..href").toJSONString();
  var id = jsonPath(artists, "$...id").toJSONString();


  var options = {
    "method": "GET",
    "hostname": "api.spotify.com",
    "port": null,
    "path": "/v1/audio-analysis/" + id,
    "headers": {
      "content-length": "0",
      "authorization": "Bearer BQBgzCpF8IYBMACuOHCNci12u6xs_0lccAQltHLcloYJ3S9lG7Nl7ksVGBP2-3lKJjve_huJ8sb5PcPmmVP5CiytT4dYCoPwSlao7mP-tMre1SarN6SlDl1bqOvib83JEEihmvYx0yArziv74Up9"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
}
export default SpotifyApi;
