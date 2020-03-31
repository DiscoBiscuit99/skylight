const { remote } = require('electron');

const { process, dialog } = remote;

let videoSrc = process.argv[2];

let videoframe = document.getElementById("video-frame");

if (videoSrc) {
	let video = document.createElement("video");

	video.id = "video";
	video.class = "video-js";
	video.preload = "auto";
	video.controls = true;
	video.autofocus = true;
	video.autoplay = true;
	video.disablePictureInPicture = true;

	let source = document.createElement("source");

	source.src = videoSrc;

	console.log(source.src);

	video.appendChild(source);
	videoframe.appendChild(video);

	if (!video.focus) {
		video.focus = true;
	}
}

let draggableRegion = document.createElement("div");

draggableRegion.id = "draggable-region";

videoframe.appendChild(draggableRegion);

//let undraggableRegion = document.createElement("div");

//undraggableRegion.id = "undraggable-region";

//videoframe.appendChild(undraggableRegion);

// Keybindings //

let Mousetrap = require('mousetrap');

let win = remote.getCurrentWindow();

// Close the window and quit the video player.
Mousetrap.bind('q', () => { win.close(); });

// Fullscreen the video.
Mousetrap.bind('f', () => {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
});

// Go 5 seconds backward.
Mousetrap.bind('left', () => {
	let currentTime = video.currentTime;
	video.currentTime = currentTime - 5;
});
// Go 5 seconds forward.
Mousetrap.bind('right', () => {
	let currentTime = video.currentTime;
	video.currentTime = currentTime + 5;
});
// Go 2 seconds backward.
Mousetrap.bind(',', () => {
	let currentTime = video.currentTime;
	video.currentTime = currentTime - 2;
});
// Go 2 seconds forward.
Mousetrap.bind('.', () => {
	let currentTime = video.currentTime;
	video.currentTime = currentTime + 2;
});

// Set current playback time by percentage.

// Set to 10%.
Mousetrap.bind('1', () => {
	video.currentTime = (video.duration / 100) * 10;  // 10%.
});
// Set to 20%.
Mousetrap.bind('2', () => {
	video.currentTime = (video.duration / 100) * 20;  // 20%.
});
// Set to 30%.
Mousetrap.bind('3', () => {
	video.currentTime = (video.duration / 100) * 30;  // 30%.
});
// Set to 40%.
Mousetrap.bind('4', () => {
	video.currentTime = (video.duration / 100) * 40;  // 40%.
});
// Set to 50%.
Mousetrap.bind('5', () => {
	video.currentTime = (video.duration / 100) * 50;  // 50%.
});
// Set to 60%.
Mousetrap.bind('6', () => {
	video.currentTime = (video.duration / 100) * 60;  // 60%.
});
// Set to 70%.
Mousetrap.bind('7', () => {
	video.currentTime = (video.duration / 100) * 70;  // 70%.
});
// Set to 80%.
Mousetrap.bind('8', () => {
	video.currentTime = (video.duration / 100) * 80;  // 80%.
});
// Set to 90%.
Mousetrap.bind('9', () => {
	video.currentTime = (video.duration / 100) * 90;  // 90%.
});
// Set to 100%.
Mousetrap.bind('0', () => {
	video.currentTime = video.duration;  // 100%.
});

