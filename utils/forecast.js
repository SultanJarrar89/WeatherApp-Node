const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const forecast = (lat, long, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=${long},${lat}&units=f`
  request({ url, json: true }, (err, res) => {
    let current = res.body.current
    if (err) {
      cb('Unable to connect to weather services')
    } else if (res.body.error) {
      cb(res.body.error.info)
    } else {
      console.log(current)
      cb(null, {
        weatherDescriptions: current.weather_descriptions[0],
        weatherPrecip: current.precip,
      })
    }
  })
}

module.exports = forecast
