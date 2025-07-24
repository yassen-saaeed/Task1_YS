const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const colorText = document.getElementById("colorText");

function updateColor() {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  colorText.style.color = rgbColor;
}

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

updateColor();

const video = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const rewindButton = document.getElementById('rewindButton');
const forwardButton = document.getElementById('forwardButton');
const seekBar = document.getElementById('seekBar');
const muteIcon = document.getElementById('muteIcon');
const speedSelect = document.getElementById('speedSelect');

playButton.addEventListener('click', () => {
    video.play();
});

stopButton.addEventListener('click', () => {
    video.pause();
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 5;
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 5;
});

seekBar.addEventListener('input', () => {
    const seekTime = video.duration * (seekBar.value / 100);
    video.currentTime = seekTime;
});

video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
});

muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
});

speedSelect.addEventListener('change', () => {
    video.playbackRate = parseFloat(speedSelect.value);
});
