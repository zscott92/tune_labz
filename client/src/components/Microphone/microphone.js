import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        audio: null
      };
    }
  
    render() {
        async getMicrophone() {
            const audio = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: false
            });
            this.setState({ audio });
          }
          stopMicrophone() {
            this.state.audio.getTracks().forEach(track => track.stop());
            this.setState({ audio: null });
          }
          toggleMicrophone() {
            if (this.state.audio) {
              this.stopMicrophone();
            } else {
              this.getMicrophone();
            }
          }
          constructor(props) {
            super(props);
            this.state = {
              audio: null
            };
            this.toggleMicrophone = this.toggleMicrophone.bind(this);
          }
          render() {
            return (
              <div className="App">
                <main>
                  <div className="controls">
                    <button onClick={this.toggleMicrophone}>
                      {this.state.audio ? 'yo MC. turn off the mic. im outchea. you unruly (Mic Power Off)' : 'mics on. one. two. one. two. one. two (Power On)'}
                    </button>
                  </div>
                </main>
              </div>
            );
          }