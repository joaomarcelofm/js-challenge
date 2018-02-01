// Controlls

const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const togglePlayer = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider')
const skipButtons = player.querySelectorAll('[data-skip]');

// Functions

function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function buttonUpdate() {
  video.paused ? togglePlayer.innerText = '►' : togglePlayer.innerText = '❚ ❚'
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function rangeUpdateAction() {
  video[this.name] = this.value
}

// Actions

video.addEventListener('click', togglePlay);
togglePlayer.addEventListener('click', togglePlay);

video.addEventListener('play', buttonUpdate);
video.addEventListener('pause', buttonUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', rangeUpdateAction));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdateAction));
