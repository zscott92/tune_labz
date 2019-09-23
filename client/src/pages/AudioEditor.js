import React, { Component } from "react";
const Spotify = require("../components/Spotify");

class AudioEditor extends Component {
    render() {
        <div className="container-fluid">
            <div className="jumbotron">
                <section className="tape">
                    <audio src="" crossorigin="anonymous" ></audio>
                    <button data-playing="false" className="tape-controls-play" role="switch" aria-checked="false">
                        <span>Play/Pause</span>
                    </button>
                </section>
            </div>
            <div className="wavDiv"><button className="convert2Wav">Convert Current File to WAV Format</button></div>
            <div className="trackDiv"><button className="track">Add MIDI Controller</button></div>
            <Wrapper >{this.Spotify.props}</Wrapper>
            <div className="sampleDiv"><label for="file">Upload File From Computer</label><input type="file" id="file" name="file" ></input></div>
            <label for="volume">Volume</label>
            <input type="range" id="volume" className="control-volume" min="0" max="2" value="1" list="gain-vals"
                step="0.01" data-action="volume" />
            <label for="attack">Attack</label>
            <input name="attack" id="attack" type="range" min="0" max="1" value="0.2" step="0.1" />
            <label for="release">Release</label>
            <input name="release" id="release" type="range" min="0" max="1" value="0.5" step="0.1" />
            <label for="hz">Hz</label>
            <input name="hz" id="hz" type="range" min="660" max="1320" value="880" step="1" />
            <label for="duration">Duration</label>
            <input name="duration" id="duration" type="range" min="0" max="2" value="1" step="0.1" />
            <label for="panner">Balance</label>
            <input id="gain-vals" />
            <option value="0" label="min" />
            <option value="2" label="max" />
            <input type="range" id="panner" class="control-panner" list="pan-vals" min="-1" max="1" value="0"
                step="0.01" data-action="panner" />
            <datalist id="pan-vals" />
            <option value="-1" label="left" />
            <option value="1" label="right" />
        </div>
    }
}