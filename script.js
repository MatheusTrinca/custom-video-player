// API Video e Audio Javascript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs


const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Toggle video Status
function toggleVideoStatus(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

// Update Play/Pause Icons
function updatePlayIcon(){
  if(video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  }else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// Update progress bar and timestamp value(number)
function updateProgress(){
  progress.value = video.currentTime / video.duration * 100;
  // timestamp
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) [
    mins = '0' + String(mins)
  ]
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs)
  }
  timestamp.innerHTML = `${mins}:${secs}`
}

// Set video time to progress change
function setVideoProgress(){
  video.currentTime = video.duration * progress.value / 100;
}

function stopVideo(){
  video.currentTime = 0;
  video.pause();
}


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);