const mysql = require("mysql");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const songSeed = [
  {
    song_name: "Song 1",
    song_desc: "Song description",
    song_pic_url:""
  },
  {
    song_name: "Song 2",
    song_desc: "Song description",
    song_pic_url:""
  },
  {
    song_name: "Song 3",
    song_desc: "Song description",
    song_pic_url:""
  },
  {
    song_name: "Song 4",
    song_desc: "Song description",
    song_pic_url:""
  }
]