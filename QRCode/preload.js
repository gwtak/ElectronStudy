const { contextBridge, ipcRenderer, globalShortcut } = require("electron")

contextBridge.exposeInMainWorld("ipcRenderer", {
    send: (event, args) => {
        ipcRenderer.send(event, args)
    }
})

contextBridge.exposeInMainWorld("globalShortcut", {
    register: (event, shortcut) => {
        globalShortcut.register(event, shortcut)
    }
})