

/*
// Audio tag - classic html5
var sound=document.createElement('audio');
sound.setAttribute('src','assets/animals001.mp3');
sound.play();*/

var sound;

window.onload = function(){
   sound=new Sound('assets/animals001.mp3');
   console.log(sound);
}


function startPlay(){
	sound.play();

}