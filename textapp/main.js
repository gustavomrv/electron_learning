const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron

app.on('ready', () =>{
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
})

ipcMain.on('save', (event, text)=>{
    // saving the text in a file
    console.log(text)
})
