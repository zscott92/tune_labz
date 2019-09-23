
const mm = require('music-metadata');
const util = require('util');
const path = require("path");
const router = require("express").Router();

const { TheWAV } = require('the-wav')

router.get("/api/fileTransfer", function (req, res) {
    
  async function tryExample() {
    const wav = new TheWAV(`./sample_files/`, {
      sampleRate: 48000,
    })
    
    const seconds = 10
 
    const whiteNoise10sec = [
      new Float32Array(wav.sampleRate * seconds).map(() => Math.random() - 0.5),
      new Float32Array(wav.sampleRate * seconds).map(() => Math.random() - 0.5),
    ]
    
    // Append data
    await wav.append(whiteNoise10sec)
    await wav.append(whiteNoise10sec)
    
    // Write into file
    await wav.flush()
  }
});
module.exports = router ;
