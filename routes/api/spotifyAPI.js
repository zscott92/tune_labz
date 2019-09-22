var Spotify = require('spotify-web-api-node');
let spotifyApi = new Spotify(keys.spotify);

spotifyApi.getAudioAnalysisForTrack(userInput)
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });