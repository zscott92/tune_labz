import React, { Component } from "react";
import "../../../../routes/fileTransferAPI/fileUploadApi";
import { audioElement, audioCtx } from "../UploadFIle"

class PlayMusic extends Component {
    function() {
        const powerButton = document.querySelector('.control-power');
        playButton.addEventListener('click', function () {

            if (this.dataset.playing === 'false') {
                audioElement.play();
                this.dataset.playing = 'true';
            } else if (this.dataset.playing === 'true') {
                audioElement.pause();
                this.dataset.playing = 'false';
            }
            
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

        });
    }
}
export default PlayMusic;