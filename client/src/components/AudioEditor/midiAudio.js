import React, { Component } from "react";

class MidiAudio extends Component {
  function() {
    WebMidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else { 
        console.log("WebMidi enabled!");
        console.log(WebMidi.inputs);
        console.log(WebMidi.outputs);
      }
    });

    console.log(WebMidi.time);
    var output = WebMidi.outputs[0];
    input = WebMidi.inputs[0];
    if (output != null) {
      analyser = output;
    }

    input.addListener('noteon', "all",
      function (e) {
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
      }
    );
 
    input.addListener('pitchbend', 3,
      function (e) {
        console.log("Received 'pitchbend' message.", e);
      }
    );

    input.addListener('controlchange', "all",
      function (e) {
        console.log("Received 'controlchange' message.", e);
      }
    );
  
    input.addListener('nrpn', "all",
      function (e) {
        if (e.controller.type === 'entry') {
          console.log("Received 'nrpn' 'entry' message.", e);
        }
        if (e.controller.type === 'decrement') {
          console.log("Received 'nrpn' 'decrement' message.", e);
        }
        if (e.controller.type === 'increment') {
          console.log("Received 'nrpn' 'increment' message.", e);
        }
        console.log("message value: " + e.controller.value + ".", e);
      })
  }
};

export default MidiAudio;