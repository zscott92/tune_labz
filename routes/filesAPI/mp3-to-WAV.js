import filePicker, {audioContext} from '../filesAPI/filePicker'
var toWav = require('audiobuffer-to-wav');
var xhr = require('xhr')

 
function mp3Converter() {
  xhr({
    uri: [audioContext],
    responseType: 'arraybuffer'
  }, function (err, body, resp) {
    if (err) throw err
    // decode the MP3 into an AudioBuffer
    audioContext.decodeAudioData(resp, function (buffer) {
      // encode AudioBuffer to WAV
      let wavFile = toWav(buffer)
      return wavFile;
    })
  })
}
export default mp3Converter;