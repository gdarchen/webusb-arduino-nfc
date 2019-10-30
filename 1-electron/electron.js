const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const fs = require('fs');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


let mainWindow;

// Build the absolute path to the React Dev Tool Chrome Extension
function buildPathToReactDevTool() {
    const chromeAppRoot = '%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi'.replace(
        /%([^%]+)%/g,
        function(_, n) {
            return process.env[n];
        }
    );
    let version = '';
    fs.readdirSync(chromeAppRoot).forEach((file) => (version = file));
    return `${chromeAppRoot}\\${version}`;
}


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 2736,
        height: 1824,
        show: false,
        icon: __dirname + './icons/icon.png'
    });

    if (isDev) {
        //mainWindow.maximize();

        // Add the React Dev Tool extension
        BrowserWindow.addDevToolsExtension(buildPathToReactDevTool());
    } else {
        mainWindow.setFullScreen(true);
    }

    mainWindow.openDevTools();


    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:8080/"
            : `file://${path.join(__dirname, "./build/index.html")}`
    );

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
