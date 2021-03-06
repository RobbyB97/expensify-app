// Libraries
const path = require('path')
const express = require('express')


// env
const port = process.env.PORT || 3000

// Express config
const app = express()

const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


// Run server
app.listen(port, () => {
    console.log('Server is up')
})