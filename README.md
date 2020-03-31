# SVP &ndash; Small Video Player

SVP is a minimal videoplayer, kinda like mpv. It is built with the frameworks [electron](https://www.electronjs.org/) and [mousetrap](https://www.npmjs.com/package/mousetrap) for local keybindings in a browser context.

## Installing the SVP

For now, installing the video player requires you to clone the repository and install the node modules. (Run `npm install --save-dev` in the project root directory.)

## Operating the SVP

As of now, the video player can only be spawned from the command line, starting the application and passing it the desired video file. 

The video player can be spawned by running `npm start [filename]` in the projects root directory. As a short term hack, I made a function in my `.bashrc` that takes the first argument passed to it, redirects to the project root directory, runs `npm start [filename]`, then redirects back to the previous working directory so one's flow isn't broken.

### Keybindings

| Key     | Function                   |
| ------- | -------------------------- |
| `q`     | Quit videoplayer           |
| `f`     | Fullscreen videoplayer     |
| `esc`   | Exit fullscreen            |
| `right` | Video forward (5 seconds)  |
| `left`  | Video backward (5 seconds) |
| `.`     | Video forward (2 seconds)  |
| `,`     | Video backward (2 seconds) |
