(function (window) {

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	var speakWord="Hello";
	var helloSpeaker={};
	helloSpeaker.speak=function(names){
		console.log(speakWord+" "+names);
	}
	window.helloSpeaker=helloSpeaker;
})(window);