const { remote } = require('electron');
const dialog = remote.dialog;

let Mousetrap = require('mousetrap');

Mousetrap.bind('esc', () => { remote.getCurrentWindow().close(); })

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

