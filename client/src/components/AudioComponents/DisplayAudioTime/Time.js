import API from "../../../../../routes/filesAPI/fileUploadApi";


export function displayTime() {
    if (audioctx && audioctx.state !== 'closed') {
        timeDisplay.textContent = 'Current context time: ' + audioctx.currentTime.toFixed(3);
    } else {
        timeDisplay.textContent = 'Current context time: No context exists.'
    }
    requestAnimationFrame(displayTime);
}