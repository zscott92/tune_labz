import React, { Component } from 'react';
import AudioVisuals from '../AudioVisuals/AudioVisuals';

class AudioAnalyser extends Component {
    componentDidMount() {
        this.audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.source = this.audioContext.createMediaStreamSource(this.props.audio);
        this.source.connect(this.analyser);
      }
      tick() {
        this.analyser.getByteTimeDomainData(this.dataArray);
        this.setState({ audioData: this.dataArray });
        this.rafId = requestAnimationFrame(this.tick);
      }
      this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }
  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }
  render() {
    return <textarea value={this.state.audioData} />;
  }
 
}

export default AudioAnalyser;