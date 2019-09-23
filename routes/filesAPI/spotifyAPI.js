var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.spotify.com",
  "port": null,
  "path": "/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
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
