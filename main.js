const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({ width: 1280, height: 800 })

  // et charge le index.html de l'application.
  win.loadFile('index.html')
}

app.on('ready', createWindow)
