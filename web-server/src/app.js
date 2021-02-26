const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const publicDirctory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

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
app.get('/weather', (req, res) => {
  let address = req.query.address
  if (!address) {
    return res.send({
      err: 'You must Provide an address ',
    })
  }
  geocode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) return res.send({ err })
    forecast(latitude, longitude, (err, forecastData) => {
      if (err) return res.send({ err })
      res.send({
        forecast: forecastData.weatherDescriptions,
        location,
        rainChance: forecastDataweatherPrecip,
      })
    })
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    errMsg: '404 page',
  })
})

app.listen(5000, () => {
  console.log('server started')
})
