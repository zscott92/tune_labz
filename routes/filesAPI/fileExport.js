
import Route, {router} from '../api/songs';

module.exports = function exportWav() {
    var rate = 22050;

    function exportWAV(type, before, after) {
        if (!before) { before = 0; }
        if (!after) { after = 0; }

        var channel = 0,
            buffers = [];
        for (channel = 0; channel < numChannels; channel++) {
            buffers.push(mergeBuffers(recBuffers[channel], recLength));
        }

        var i = 0,
            offset = 0,
            newbuffers = [];

        for (channel = 0; channel < numChannels; channel += 1) {
            offset = 0;
            newbuffers[channel] = new Float32Array(before + recLength + after);
            if (before > 0) {
                for (i = 0; i < before; i += 1) {
                    newbuffers[channel].set([0], offset);
                    offset += 1;
                }
            }
            newbuffers[channel].set(buffers[channel], offset);
            offset += buffers[channel].length;
            if (after > 0) {
                for (i = 0; i < after; i += 1) {
                    newbuffers[channel].set([0], offset);
                    offset += 1;
                }
            }
        }

        if (numChannels === 2) {
            var interleaved = interleave(newbuffers[0], newbuffers[1]);
        } else {
            var interleaved = newbuffers[0];
        }

        var downsampledBuffer = downsampleBuffer(interleaved, rate);
        var dataview = encodeWAV(downsampledBuffer, rate);
        var audioBlob = new Blob([dataview], { type: type });

        this.postMessage(audioBlob);

        router.use(audioBlob);

    }
}
export default exportWav;