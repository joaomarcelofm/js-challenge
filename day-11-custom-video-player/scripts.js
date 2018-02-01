// Controlls

const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const togglePlayer = player.querySelector('.toggle');
const ranges = player.querySelector('.player__slider')
const skipButtons = player.querySelectorAll('data-skip');

// Functions

function togglePlay() {
  // video.paused ? video.play() : video.pause()

  if(video.paused) {
    video.play();
    togglePlayer.innerText = '❚ ❚';
  } else {
    video.pause();
    togglePlayer.innerText = '►';
  }
}

// Actions

video.addEventListener('click', togglePlay);
togglePlayer.addEventListener('click', togglePlay);
