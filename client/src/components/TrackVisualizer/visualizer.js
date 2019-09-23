//from r-audio npm documentation

import React from "react";

let Visualizer = () => {
    <div className = "container-fluid">
    <RAudioContext debug={true} onInit={ctx => this.audioContext = ctx}>
        <RPipeline>
            <RBufferSource buffer={this.state.buffer} loop />
            <RSplitChannels channelCount={2}>
                <RPipeline>
                    <RWaveShaper curve={this.makeDistortionCurve(200)} />
                    <RConvolver buffer={this.state.buffer} />
                    <RDynamicsCompressor threshold={-50} knee={40} />
                    <RGain gain={.5} />
                </RPipeline>
                <RPipeline>
                    <ROscillator frequency={1} type="sine" detune={0} connectToParam="gain" />
                    <RGain gain={1} />
                </RPipeline>
            </RSplitChannels>
        </RPipeline>
        </RAudioContext>
        </div>
}

export default Visualizer;