
function upload() {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = new AudioContext();
    let audioElement = document.querySelector('audio');
    let track = audioCtx.createMediaElementSource(audioElement);

    console.clear();

    $('input[type="file"]').change(function (event) {
        let name = event.target.files[0].name;
        console.log(name);
        audioElement = new Howl({
            src: [name],
            autoplay: true,
            loop: true,
            volume: 0.5,
        });
    })
    return track;
}
export default upload;