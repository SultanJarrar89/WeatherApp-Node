const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=37.7749,122.4194`

request({ url }, (err, res) => {
  const data = JSON.parse(res.body)
  console.log(data.current)
})
