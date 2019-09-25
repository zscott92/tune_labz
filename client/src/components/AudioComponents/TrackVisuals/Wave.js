import { mp3Converter } from "../../../../../routes/filesAPI/mp3-to-WAV"

export function Wave() {
    waves = () =>
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });
    function render() {
        <div class="wave">
            wavesurfer.load({mp3Converter});
            container: '#waveform',
            scrollParent: true
        </div>
    }
    render();
}