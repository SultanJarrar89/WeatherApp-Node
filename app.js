const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

// const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=37.7749,122.4194&units=f`

// request({ url, json: true }, (err, res) => {
//   let current = res.body.current
//   if (err) {
//     console.log('Unable to connect to server')
//   } else if (res.body.success) {
//     console.log(res.body.error.info)
//   } else {
//     console.log(
//       `${current.weather_descriptions[0]}.It is currently ${current.temperature} degressout,There is a ${current.precip} % chance of rain `
//     )
//   }
// })
const url =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/los%20Angeles.json?access_token=pk.eyJ1Ijoic3VsdGFuODkiLCJhIjoiY2tsaG05c3M5MDV3eTJucG1kaHk1b29oOSJ9.QviNO-8V0feuCLy0YpsVHQ&limit=1'
request({ url, json: true }, (err, res) => {
  if (err) {
    console.log('Unable to connect to server')
  } else if (res.body.message) {
    console.log('please provide a valid location')
  } else {
    const [long, lat] = res.body.features[0].center
    console.log(long, lat)
  }
})
