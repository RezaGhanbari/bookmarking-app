const electron = require('electron');
const {app, BrowserWindow} = electron;

let mainWindow;

function createWindow() {
    // create the browser window
    mainWindow = new BrowserWindow({width: 800, heigth:600});

    // render index.html which will contain our root Vue component
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // dereference the mainWindow object when the window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// call the createWindow() method when Electron has finished initializing
app.on('ready', createWindow);

// when all windows are closed, quit the application on Windows/Linux
app.on('window-all-close', () => {
    // only quit the application on OS X if the user hits cmd + q
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    // re-create the mainWindow if the dock icon is clicked in OS-X and no other
    // windows were open
    if (mainWindow == null){
        createWindow();
    }
});