
const router = require("express").Router();
import Audio, { audioElement } from "../../client/src/components/AudioComponents/UploadFIle/upload"

module.exports = function playAudioRoute() {
  axios.post(audioElement, function()  {
    router.use(/api/songs)
  })
}