

/*
// Audio tag - classic html5
var sound=document.createElement('audio');
sound.setAttribute('src','assets/animals001.mp3');
sound.play();

*/

window.onload = function(){
   window.s1=new Sound('assets/animals001.mp3');
   window.s2=new Sound('assets/animals002.mp3');
}


window.startPlay=function(){

	//Object.play(volume,delayInSecs)

	s1.play(100,0);
	s1.play(50,1);
}