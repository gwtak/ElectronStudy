const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

function createMainWindow() {
    const winMain = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // contextIsolation: false,
            preload: path.join(__dirname, "preload.js")
        }
    })
    winMain.loadFile(path.join(__dirname, "main.html"))
    winMain.webContents.openDevTools()
}

function createCaptureWindow() {
    console.log("createCaptureWindow")
    // 全屏透明窗口
    const winCapture = new BrowserWindow({
        width: 800,
        height: 600,
        // fullscreen: true,
        opacity: 0.5,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    winCapture.loadFile(path.join(__dirname, "capture.html"))
    winCapture.webContents.openDevTools()
}

app.whenReady().then(createCaptureWindow)

ipcMain.on("btnSnapShot", () => {
    console.log("btnSnapShot")
    createCaptureWindow()
})

ipcMain.on("quit", () => {
    console.log("quit")
    app.quit()
})