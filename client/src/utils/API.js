import axios from "axios";
import { google } from 'googleapis';
import { GoogleLogin } from 'react-google-login';


export default {

  //==================SONGS===========================
  //gets alls songs
  getSongs: function () {
    return axios.get("/api/songs");
  },
  //gets song with given user id
  getUserSongs: function (id) {
    return axios.get(`api/user/${id}/songs`);
  },

  //gets child songs of a song by song id
  getSongChildren: function(id) {
    return axios.get("/api/songs/children/" + id) //TODO need to understand how to pull children
  },
  // Deletes the song with the given id
  deleteSong: function (id) {
    return axios.delete("/api/songs/" + id);
  },
  // Saves a song to the database
  saveSong: function (songData) {
    return axios.post("/api/songs", songData);
  },

//TODO need functions that post songs both parent and child.  How to distinguish between the two??


  //===================USER===========================
  //gets User with given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  }
};

//===================Google SIGNIN=====================
// front end
function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;


var axios = new XMLHttpRequest();
axios.open('POST', 'https://yourbackend.example.com/tokensignin');
axios.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
axios.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
axios.send('idtoken=' + id_token);
// const googleConfig = {
//   clientId: process.env.GOOGLE_CLIENT_ID, 
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
//   redirect: process.env.GOOGLE_REDIRECT_URL, 
// };

// const defaultScope = [
//   'https://www.googleapis.com/auth/plus.me',
//   'https://www.googleapis.com/auth/userinfo.email',
// ];

// /*************/
// /** HELPERS **/
// /*************/

// function createConnection() {
//   return new google.auth.OAuth2(
//     googleConfig.clientId,
//     googleConfig.clientSecret,
//     googleConfig.redirect
//   );
// }

// function getConnectionUrl(auth) {
//   return auth.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: defaultScope
//   });
// }

// function getGooglePlusApi(auth) {
//   return google.plus({ version: 'v1', auth });
// }

// /**********/
// /** MAIN **/
// /**********/

// /**
//  * Part 1: Create a Google URL and send to the client to log in the user.
//  */
// function urlGoogle() {
//   const auth = createConnection();
//   const url = getConnectionUrl(auth);
//   return url;
// }

// /**
//  * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
//  */
// function getGoogleAccountFromCode(code) {
//   const data = await auth.getToken(code);
//   const tokens = data.tokens;
//   const auth = createConnection();
//   auth.setCredentials(tokens);
//   const plus = getGooglePlusApi(auth);
//   const me = await plus.people.get({ userId: 'me' });
//   const userGoogleId = me.data.id;
//   const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
//   return {
//     id: userGoogleId,
//     email: userGoogleEmail,
//     tokens: tokens,
//   };
// }

