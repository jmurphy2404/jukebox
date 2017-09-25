
//create tracks array
const tracks = [
	{name: "Coming Down", file: "bradycomingdown.mp3"},
	{name: "Dog Show", file: "bradydogshow.mp3"},
	{name: "Never Gonna Give You Up", file: "astleynevergonna.mp3"}
];

//initialize nowPlaying and declare elements to be set after DOMContentLoaded

let currentTrack = 0;
let elJukebox;
let elPlayer;
let elCurrentSong;
let elControls;
let elRewind;
let elPlay;
let elPause;
let elForward;

// set variables after page loads to their items
document.addEventListener("DOMContentLoaded", function(){

	elJukebox = document.querySelector("#myJukebox");
	elPlayer = elJukebox.querySelector("audio");
	elCurrentSong = elJukebox.querySelector("#nowPlaying");
	elControls = elJukebox.querySelector("#controls");
	elRewind = elControls.querySelector("#rewind");
	elPlay = elControls.querySelector("#play");
	elPause = elControls.querySelector("#pause");
	elForward = elControls.querySelector("#forward");

//create nested if fuction for each button on a click of the div box containing all controls
	document.getElementById("controls").addEventListener("click", function(event){
		if (event.target == elPlay){
			elPlayer.play();
			elCurrentSong.innerHTML = tracks[currentTrack].name;
		} else if (event.target == elPause){
			elPlayer.pause();
		}	else if (event.target == elForward){
			elPlayer.pause();			
			currentTrack = (currentTrack + 1);
			elPlayer.src = `${tracks[currentTrack].file}`;
			elCurrentSong.innerHTML = tracks[currentTrack].name;
			elPlayer.play();
		} else if (event.target == elRewind){
			elPlayer.pause();
			currentTrack = (currentTrack - 1);
			elPlayer.src = `${tracks[currentTrack].file}`;
			elCurrentSong.innerHTML = tracks[currentTrack].name;
			elPlayer.play();
		}
	});




});
