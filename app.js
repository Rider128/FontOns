const {app, globalShortcut} = require('electron') app.on('ready', () => { // Enregistre un écouteur de raccourci 'CommandOrControl+Y'. globalShortcut.register('CommandOrControl+Y', () => { // Lance le code ici quand Y et Command/Control sont pressés en même temps. }) })
// Run the following from the Console tab of your app's DevTools
require('devtron').install()
// You should now see a Devtron tab added to the DevTools
