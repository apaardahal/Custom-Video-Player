const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

//Play and pause video
const toggleVideoStatus = () =>{
    if(video.paused){
        video.play()
    }
    else{
        video.pause();
    }
}

//Update play, pause icon
const updatePlayIcon = () =>{
    if(video.paused){
        play.innerHTML = '<i class = "fa fa-play fa-2x"></i>';
    }
    else{
        play.innerHTML = '<i class = "fa fa-pause fa-2x">>/i>'
    }
}

//update progress and timestamo
const updateProgress = () =>{
   progress.value = (video.currentTime / video.duration) * 100;

   //Get minutes
   let mins = Math.floor(video.currentTime / 60);
   if(mins < 10 ){
       mins = '0' + String(mins);
   }

    //Get Seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10 ){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML =  `${mins}:${secs}`;
}

//Set video time to progress
const setVideoProgress = () =>{
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Stop video
const stopVideo = () =>{
    video.currentTime = 0;
}


console.log(1);