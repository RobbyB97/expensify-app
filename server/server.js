// Libraries
const path = require('path')
const express = require('express')

// Express config
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath))

// Run server
app.listen(3000, () => {
    console.log('Server is up')
})