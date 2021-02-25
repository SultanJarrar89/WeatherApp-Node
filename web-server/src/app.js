const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicDirctory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

console.log(viewsPath)

app.use(express.static(publicDirctory))

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialPath)

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Sultan Jarrar',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Sultan Jarrar',
  })
})
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    text: 'some text about help',
    name: 'Sultan Jarrar',
  })
})

app.listen(5000, () => {
  console.log('server started')
})
