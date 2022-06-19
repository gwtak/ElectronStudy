window.globalShortcut.register("Esc", () => {
    ipcRenderer.send("quit")
})