const btnSnapShot = document.getElementById("btnSnapShot")
const btnScanQRCode = document.getElementById("btnScanQRCode")

btnSnapShot.addEventListener("click", () => {
    window.ipcRenderer.send("btnSnapShot")
})