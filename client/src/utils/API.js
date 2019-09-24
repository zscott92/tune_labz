import axios from "axios";


export default {

  //==================SONGS===========================
  //gets alls songs - need to update for specific user
  getSongs: function () {
    return axios.get("/api/songs");
  },
  //gets song with given id
  getSong: function (id) {
    return axios.get("/api/songs/" + id);
  },
  // Deletes the song with the given id
  deleteSong: function (id) {
    return axios.delete("/api/songs/" + id);
  },
  // Saves a song to the database
  saveSong: function (songData) {
    return axios.post("/api/songs", songData);
  },


//TODO need to add functions that pull songs per user
//TODO need functions that pull all child songs for a song parent


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
function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
}

var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);


