import React, { Component } from "react";
import "../../../../routes/fileTransferAPI/fileUploadApi";
import API from "../utils/API";

class PlayMusic extends Component {
    function() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx = new AudioContext();
        let audioElement = document.querySelector('audio');
        let track = audioCtx.createMediaElementSource(audioElement);
        let playButton = document.querySelector('.tape-controls-play');

        console.clear();

        $('input[type="file"]').change(function (event) {
            let name = event.target.files[0].name;
            console.log(name);
            audioElement = new Howl({
                src: [name],
                autoplay: true,
                loop: true,
                volume: 0.5,
            });
        })

        const gainNode = audioCtx.createGain();

        track.connect(gainNode).connect(volume).connect(audioCtx.destination);
        const volumeControl = document.querySelector('[data-action="volume"]');
        volumeControl.addEventListener('input', function () {
            gainNode.gain.value = this.value;
        }, false);

        const pannerOptions = { pan: 0 };
        const panner = new StereoPannerNode(audioCtx, pannerOptions);
        track.connect(gainNode).connect(panner).connect(audioCtx.destination);
        const pannerControl = document.querySelector('[data-action="panner"]');
        pannerControl.addEventListener('input', function () {
            panner.pan.value = this.value;
        }, false);

        const powerButton = document.querySelector('.control-power');

        powerButton.addEventListener('click', function () {
            if (this.dataset.power === 'on') {
                audioCtx.suspend();
                this.dataset.power = 'off';
            } else if (this.dataset.power === 'off') {
                audioCtx.resume();
                this.dataset.power = 'on';
            }
            this.setAttribute("aria-checked", state ? "false" : "true");
            console.log(audioCtx.state);
        }, false);

        function displayTime() {
            if (audioctx && audioctx.state !== 'closed') {
                timeDisplay.textContent = 'Current context time: ' + audioctx.currentTime.toFixed(3);
            } else {
                timeDisplay.textContent = 'Current context time: No context exists.'
            }
            requestAnimationFrame(displayTime);
        }
    
        displayTime() = document.querySelector('time');
        const playButton = document.querySelector('button');
    
        playButton.addEventListener('click', function () {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            if (this.dataset.playing === 'false') {
                audioElement.play();
                this.dataset.playing = 'true';
            } else if (this.dataset.playing === 'true') {
                audioElement.pause();
                this.dataset.playing = 'false';
            }
        }, false);
    }
};

export default PlayMusic;