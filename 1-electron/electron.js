require("@babel/register");
const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;

const path = require("path");
const isDev = require("electron-is-dev");

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 2736,
    height: 1824,
    show: false,
    icon: `${__dirname}./icons/icon.png`
  });

  if (!isDev) {
    mainWindow.setFullScreen(true);
  }

  mainWindow.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:8080/"
      : `file://${path.join(__dirname, "./build/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
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
