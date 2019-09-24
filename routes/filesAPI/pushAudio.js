
const router = require("express").Router();
import axios from 'axios';

axios.post("/api/songs", fileUpload, {
  songID: [song.id],
  songSrc: [song.src],
  length: [song.duration]
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })