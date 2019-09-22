
const router = require("express").Router();
const Howl = require('howler');

  router.get('/api/uploadAudioFile', function (req, res) {
    console.log(audioElement);
    playButton.addEventListener('click', function () {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
      } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
      }

      audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false';
        playButton.setAttribute("aria-checked", "false");
      }, false)
      res.json(req.audioplayer)
    })
  });

module.exports(router, Howl);