const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicDirctory = path.join(__dirname + '../public')

app.get('', (req, res) => {
  res.send('hi')
})

app.listen(5000, () => {
  console.log('server started')
})
