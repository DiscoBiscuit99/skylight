const { remote } = require('electron');
const dialog = remote.dialog;

let videoSrc = remote.process.argv[2];

console.log(videoSrc);

let videoframe = document.getElementById("video-frame");

if (videoSrc) {
	let video = document.createElement("video");

	video.id = "video";
	video.class = "video-js";
	video.preload = "auto";
	video.controls = true;
	video.autofocus = true;
	video.autoplay = true;

	let source = document.createElement("source");

	source.src = videoSrc;

	console.log(source.src);

	video.appendChild(source);
	videoframe.appendChild(video);
}

let draggableRegion = document.createElement("div");

draggableRegion.id = "draggable-region";

videoframe.appendChild(draggableRegion);

if (!video.focus) {
	video.focus = true;
}

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

/// Time regarding keybindings.

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
