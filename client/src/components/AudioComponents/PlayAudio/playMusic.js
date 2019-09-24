import React, { Component } from "react";
import "../../../../routes/fileTransferAPI/fileUploadApi";
import {audioCtx} from "../UploadFIle"

class PlayMusic extends Component {
    function() {
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

    }
}
export default PlayMusic;