

var Sound=function(source){

	var that=this;
	var isLoaded=false;

	//Declaring audio context
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	ac = new AudioContext();

	// Fetching and decoding audio from url
	var bufferedSound;
	var ajax=new XMLHttpRequest();
	ajax.open('GET',source,true);
	ajax.responseType='arraybuffer';
	ajax.onload=function(){
		ac.decodeAudioData(ajax.response,function(buffer){
			bufferedSound=buffer;
			isLoaded=true;
		});

	};
	ajax.send();



	that.play=function(){

		//Creating source node, connecting it to destination and start play
		if(isLoaded){
			var playsound=ac.createBufferSource();
			playsound.buffer=bufferedSound;
			playsound.connect(ac.destination);
			playsound.start(0);
		}

	};

};
