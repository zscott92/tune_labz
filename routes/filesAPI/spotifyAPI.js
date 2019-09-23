const router = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

let redirectUri = 'https://accounts.spotify.com/authorize';
let spotifyApi = new SpotifyWebApi({
  clientId : process.env.SPOTIFY_CLIENT_ID,
  clientSecret : process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri : redirectUri
});

router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get('/callback', (req, res) => {
  const { code } = req.query;
  spotifyApi.authorizationCodeGrant(code).then(data => {
    const { expires_in, access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    res.redirect(`/#/user/${access_token}/${refresh_token}`);
  }).catch(err => {
    res.redirect('/#/error/invalid token');
  });
});
});

router.get('/callback', (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch');
  } else {
    const { expires_in, access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    res.redirect(`/#/user/${access_token}/${refresh_token}`);
  }).catch(err => {
    res.redirect('/#/error/invalid token');
  });
});
});
  }
});


componentDidMount() { 
  const {dispatch, params} = this.props;
  const {accessToken, refreshToken} = params;
  dispatch(setTokens({accessToken, refreshToken}));
  dispatch(getMyInfo());
}

import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();
spotifyApi.getAudioAnalysisForTrack('')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

case SPOTIFY_ME_BEGIN:
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {loading: true})
  });

// when we get the data merge it in
case SPOTIFY_ME_SUCCESS:
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, action.data, {loading: false})
  });