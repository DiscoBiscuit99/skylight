const { app, screen, globalShortcut, BrowserWindow } = require('electron');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 50 * 16,
		height: 50 * 9,
		frame: false,
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	let display = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());

	let pos = [ display.size.width - win.getSize()[0], display.size.height - win.getSize()[1] ];

	win.setPosition(pos[0], pos[1]);

	win.loadFile('src/index.html');

	win.setAlwaysOnTop(true);

	win.once('ready-to-show', () => {
		win.show();
	});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('will-quit', () => {
	globalShortcut.unregister('CommandOrControl+Q');
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

