const express = require('express')
// you can also use this instead 1st line :
// import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// i created a new route /twitter to send my twitter id
app.get('/twitter', (req, res) => {
    res.send('this is my twitter id niraja_03')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
