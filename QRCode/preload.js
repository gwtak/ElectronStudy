const { contextBridge, ipcRenderer, Menu, MenumItem, desktopCapture } = require("electron")
const fs = require("fs")

contextBridge.exposeInMainWorld("ipcRenderer", {
    send: (event, args) => {
        ipcRenderer.send(event, args)
    }
})

contextBridge.exposeInMainWorld("fs", {
    saveFile: (filePath, data) => {
        fs.writeFileSync(filePath, data)
    }
})

contextBridge.exposeInMainWorld("desktopCapture", {
    capture: ({ types: ["window", "screen"] }) => {
    desktopCapture.getSources(types).then(async => {
    }})
})