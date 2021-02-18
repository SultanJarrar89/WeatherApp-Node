const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=37.7749,122.4194&units=f`

request({ url, json: true }, (err, res) => {
  let current = res.body.current
  console.log(current)
  console.log(
    `${current.weather_descriptions[0]}.It is currently ${current.temperature} degressout,There is a ${current.precip} % chance of rain `
  )
})
