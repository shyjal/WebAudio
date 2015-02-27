

(function(){

/*
// Audio tag - classic html5
var sound=document.createElement('audio');
sound.setAttribute('src','assets/animals001.mp3');
sound.play();*/



window.AudioContext = window.AudioContext || window.webkitAudioContext;
ac = new AudioContext();

// Fetching and decoding
var bufferedSound;
var ajax=new XMLHttpRequest();
ajax.open('GET','assets/animals001.mp3',true);
ajax.responseType='arraybuffer';
ajax.onload=function(){
	ac.decodeAudioData(ajax.response,function(buffer){
		bufferedSound=buffer;
	});
};
ajax.send();



window.play=function(){
	alert('s')
	var playsound=ac.createBufferSource();
	playsound.buffer=bufferedSound;
	playsound.connect(ac.destination);
	playsound.noteOn(0);


};


}());
