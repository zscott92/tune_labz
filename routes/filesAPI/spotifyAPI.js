const router = require("express").Router();

let redirectUri = 'localhost:3001';
let spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
  redirectUri : redirectUri
});

router.get("/authorize", function (request, response) {
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, null, showDialog);
  console.log(authorizeURL)
  response.send(authorizeURL);
});

router.get("/callback", function (request, response) {
  var authorizationCode = request.query.code;
  
  spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {
    console.log(data)
    response.redirect(`/#access_token=${data.body['access_token']}&refresh_token=${data.body['refresh_token']}`)
  }, function(err) {
    console.log('Something went wrong when retrieving the access token!', err.message);
  });
});

router.get("/logout", function (request, response) {
  response.redirect('/'); 
});

router.get('/myendpoint', function (request, response) {
  var loggedInSpotifyApi = new SpotifyWebApi();
  console.log(request.headers['authorization'].split(' ')[1]);
  loggedInSpotifyApi.setAccessToken(request.headers['authorization'].split(' ')[1]);
  loggedInSpotifyApi.getAudioAnalysisForTrack(state.input)
    .then(function(data) {
      console.log(data.body);
      response.send(data.body);
    }, function(err) {
      console.error(err);
    });
  
});
