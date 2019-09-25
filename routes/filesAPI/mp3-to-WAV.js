import {selectedfile} from "../../client/src/components/AudioComponents/FileUploads"
var toWav = require('audiobuffer-to-wav');
var xhr = require('xhr');

export function mp3Converter() {
  if (selectedfile.substr(id.length - 3) === "mp3") {
    xhr({
      uri: [selectedfile],
      responseType: 'arraybuffer'
    }, function (err, body, resp) {
      if (err) throw err
      selectedfile.decodeAudioData(resp, function (buffer) {
        let wavFile = toWav(buffer)
        return wavFile;
      })
    })
  }
}