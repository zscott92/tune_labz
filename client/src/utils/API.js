import axios from "axios";
// import { google } from 'googleapis';
// import { GoogleLogin } from 'react-google-login';


export default {

  //==================SONGS===========================
  //gets alls songs
  getSongs: function () {
    return axios.get("/api/songs");
  },
  //gets song with given user id
  getUserSongs: function (id) {
    return axios.get(`/api/user/${id}`);
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
// function onSignIn(googleUser) {
//   var id_token = googleUser.getAuthResponse().id_token;


// var axios = new XMLHttpRequest();
// axios.open('POST', 'https://yourbackend.example.com/tokensignin');
// axios.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// axios.onload = function() {
//   console.log('Signed in as: ' + xhr.responseText);
// };
// axios.send('idtoken=' + id_token);


