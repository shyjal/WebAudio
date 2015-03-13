(function() {

/*
// Audio tag - classic html5
var sound=document.createElement('audio');
sound.setAttribute('src','assets/animals001.mp3');
sound.play();

*/

window.onload = function(){
   window.s1=new Sound('assets/animals001.mp3');
   window.s2=new Sound('assets/animals003.mp3');
}


window.startPlay=function(){

	//Object.play(volume,delayInSecs)

	s1.play(50,0);
	s2.play(100,1);
	s1.play(10,4);
}

window.startMic=function(){

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia({
      audio : "true"
  }, function(stream){
  	
  	var input = window.ac.createMediaStreamSource(stream);
    input.connect(window.destinationNode);

   },errorCallBack);
}

function errorCallBack(){
	console.log('Microphone input not supported in your browser.');
}

})();